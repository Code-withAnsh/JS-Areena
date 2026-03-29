const axios = require('axios');
const Problem = require('../models/Problem');
const callGroq = async (question, userCode, testCase) => {
    const systemPrompt = `You are a strict JavaScript code evaluator for JSArena, a JavaScript learning platform.

Your job is to READ the user's code and LOGICALLY DETERMINE if it correctly solves the problem.

IMPORTANT RULES:
1. Do NOT actually execute the code. Read it and reason about what it would produce.
2. Any valid JavaScript approach is acceptable — different algorithms, different variable names, all fine.
3. For beginner questions (Topics 1-7): User writes simple variable declarations like "let answer = someExpression". Check if the logic is correct, not the exact value.
4. For function questions (Topics 8+): User writes a function. Check if the function logic would produce correct output for the given test input.
5. Ignore extra console.log statements, comments, unused variables.
6. If the code has an obvious syntax error or wrong logic, it FAILS.
7. Almost correct is still a FAIL. Be strict but fair.
8. Do NOT penalize if user used a different but equally valid approach.

You must respond ONLY with this exact JSON. No markdown, no extra text:
{"passed": true or false, "explanation": "One clear sentence. If failed, tell exactly what is wrong."}`;

    const userMessage = `PROBLEM TITLE: ${question.title}

PROBLEM DESCRIPTION:
${question.description}

USER'S SUBMITTED CODE:
${userCode}

TEST CASE:
Input: ${testCase.input}
Expected Behavior: ${testCase.expected}

Evaluate if the user's code logic is correct for this test case.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
            ],
            max_tokens: 150,
            temperature: 0.1
        })
    });

    const data = await response.json();
    const rawText = data?.choices?.[0]?.message?.content || '';
    const clean = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    try {
        return JSON.parse(clean);
    } catch (e) {
        return {
            passed: false,
            explanation: 'AI evaluation failed. Please try again.'
        };
    }
};

const callGroqGeneric = async (prompt, jsonMode = false) => {
    const bodyArgs = {
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1
    };
    if (jsonMode) {
        bodyArgs.response_format = { type: 'json_object' };
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify(bodyArgs)
    });

    const data = await response.json();
    const rawText = data?.choices?.[0]?.message?.content || '';
    return rawText.replace(/```json/g, '').replace(/```/g, '').trim();
};

const evaluateLogic = async (problem, userCode, limitCases = false) => {
    const testCasesToEvaluate = limitCases ? problem.testCases.slice(0, 4) : problem.testCases;

    const results = await Promise.all(
        testCasesToEvaluate.map(async (testCase, index) => {
            const aiResult = await callGroq(problem, userCode, testCase);
            return {
                testCaseIndex: index,
                isHidden: testCase.isHidden,
                passed: aiResult.passed,
                explanation: testCase.isHidden ? null : aiResult.explanation,
                id: testCase._id,
                error: aiResult.passed ? null : aiResult.explanation
            };
        })
    );

    const totalPassed = results.filter(r => r.passed).length;
    const evaluatedCount = results.length;
    let status = 'partial';
    if (totalPassed === evaluatedCount) status = 'all_passed';
    else if (totalPassed === 0) status = 'all_failed';

    return {
        results,
        totalPassed,
        totalCases: evaluatedCount,
        status
    };
};

const evaluateSubmission = async (req, res) => {
    try {
        const { problemId, userCode } = req.body;
        const problem = await Problem.findById(problemId);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        const evaluationData = await evaluateLogic(problem, userCode, true);
        res.json(evaluationData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAiSolution = async (req, res) => {
    try {
        const { problemId } = req.body;
        const problem = await Problem.findById(problemId);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        const prompt = `
SYSTEM PROMPT:
You are a friendly, expert JavaScript tutor for JSArena — a JavaScript learning platform.

A student is stuck on a problem and needs help understanding it and seeing the solution.

Your job is to:
1. Explain the APPROACH — briefly tell the logic (2-3 sentences concise, no code).
2. Give a STEP-BY-STEP breakdown (Optional for this view, but keep the structure).
3. Write the EXACT SOLUTION CODE — clean, well-commented JavaScript. You MUST include a test execution using console.log() at the very bottom.
4. Explain TIME/SPACE complexity only if the question type is DSA. Leave empty for JS concept questions.

Tone: Professional, direct.
Language: English only.

You must respond ONLY with this exact JSON, no markdown outside it:
{
  "approach": "A concise 2-3 sentence explanation of the logic. Not too detailed, not too short.",
  "steps": [
    "Step 1...",
    "Step 2..."
  ],
  "solutionCode": "// full working solution code here.\\n\\n// Example usage:\\nconsole.log(myFunction(testData));",
  "complexity": "Time: O(n) because... Space: O(1) because... (empty string for JS concept questions)"
}

USER MESSAGE:
PROBLEM TITLE: ${problem.title}

PROBLEM DESCRIPTION:
${problem.description}

DIFFICULTY: ${problem.difficulty}
TOPIC: ${problem.category}
TYPE: ${problem.type}

The student is stuck. Give a complete explanation and working solution.
`;

        const response = await callGroqGeneric(prompt, true);
        const parsed = JSON.parse(response);

        if (problem.type !== 'DSA' && parsed.complexity) {
            parsed.complexity = "";
        }

        res.json(parsed);

    } catch (error) {
        console.error("Get Solution Error:", error);
        res.status(500).json({ message: "AI evaluation failed. Please try again." });
    }
};

const getHint = async (req, res) => {
    try {
        const { problemId } = req.body;
        const problem = await Problem.findById(problemId);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        const prompt = `
SYSTEM PROMPT:
You are a helpful coding assistant. Give a short, helpful HINT (1-2 sentences) for the following problem. 
Do NOT give the solution or code.

USER MESSAGE:
PROBLEM: ${problem.title}
DESCRIPTION: ${problem.description}
`;
        const response = await callGroqGeneric(prompt);
        res.json({ hint: response });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const explainSolution = async (req, res) => {
    try {
        const { problemId, userCode } = req.body;
        const problem = await Problem.findById(problemId);

        const prompt = `
SYSTEM PROMPT:
Explain the following JavaScript solution for the problem: ${problem ? problem.title : 'JavaScript Problem'}.
Focus on explaining the logic clearly.

USER CODE:
${userCode}
`;
        const response = await callGroqGeneric(prompt);
        res.json({ explanation: response });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    evaluateSubmission,
    evaluateLogic,
    getAiSolution,
    getHint,
    explainSolution
};
