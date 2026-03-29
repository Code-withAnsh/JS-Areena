require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Problem = require('../models/Problem');

const problems = [
    {
        "title": "Store the Shop Name",
        "problemId": 1,
        "slug": "store-the-shop-name",
        "description": "You are building a digital storefront for a local bakery called 'Sweet Delights'. The first step in setting up the storefront is establishing the name of the shop so it can be displayed across the website.\n\nCreate a constant variable named `shopName` and assign it the string value `'Sweet Delights'`.\n\nExample 1:\nInput: N/A\nOutput: 'Sweet Delights'\nExplanation:\n  - The shop's name is fixed and should not change during the execution of the page.\n  - A constant variable is used to store values that never change.\n  - The exact string 'Sweet Delights' is assigned to it.\n\nExample 2:\nInput: N/A\nOutput: error if reassigned\nExplanation:\n  - If another developer tries to change `shopName = 'Salty Snacks'`, the code should throw a TypeError because constants cannot be reassigned.\n\nConstraints:\n- The variable MUST be declared using the appropriate keyword for a value that never changes.\n- The variable name must be exactly `shopName`.\n- The value must be the exact string 'Sweet Delights', preserving capitalization.\n\nFollow-up: Why is it better to use a constant here instead of a let declaration?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "N/A",
                "output": "'Sweet Delights'",
                "explanation": "A string containing the exact store name is stored in a constant variable.",
                "_id": "69bb029120287b94892eb5a5"
            }
        ],
        "constraints": [
            "Must use the const keyword",
            "Variable must be named shopName",
            "Value must be exact string 'Sweet Delights'"
        ],
        "hints": [
            "Hint 1: Think about the keywords var, let, and const. Which one is for fixed values?",
            "Hint 2: Strings in JavaScript need to be wrapped in quotes.",
            "Hint 3: const shopName = 'Sweet Delights';"
        ],
        "starterCode": "// Declare your constant variable below\n",
        "testCases": [
            {
                "input": "Check existence",
                "expected": "shopName is defined as a constant",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5a6"
            },
            {
                "input": "Check value",
                "expected": "shopName equals 'Sweet Delights'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5a7"
            }
        ],
        "solutionCode": "const shopName = 'Sweet Delights';",
        "tags": [
            "variables",
            "const",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Update the Player Score",
        "problemId": 2,
        "slug": "update-the-player-score",
        "description": "In a basketball game, players earn points throughout the match. Unlike the shop name, a player's score changes constantly as the game progresses.\n\nCreate a variable named `playerScore` using the keyword for values that can change. Initialize it with the number `0`.\n\nExample 1:\nInput: N/A\nOutput: 0\nExplanation:\n  - The game starts with 0 points.\n  - The variable must be reassigned later, so `const` cannot be used.\n\nConstraints:\n- Use the `let` keyword for declaration.\n- The variable name must be `playerScore`.\n- The initial value must be the number `0`.\n\nFollow-up: What would happen if you used `var` instead of `let`? (Hint: Think about block scoping!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "N/A",
                "output": "0",
                "explanation": "Variable initialized to zero points.",
                "_id": "69bb029120287b94892eb5a9"
            }
        ],
        "constraints": [
            "Must use the let keyword",
            "Variable must be named playerScore",
            "Initial value must be 0"
        ],
        "hints": [
            "Hint 1: Is a score fixed or changeable?",
            "Hint 2: `let score = 5;` is the standard format.",
            "Hint 3: Use `0` without quotes for a number type."
        ],
        "starterCode": "// Declare your changeable variable below\n",
        "testCases": [
            {
                "input": "Check existence",
                "expected": "playerScore is defined with let",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5aa"
            },
            {
                "input": "Check initial value",
                "expected": "playerScore equals 0",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5ab"
            }
        ],
        "solutionCode": "let playerScore = 0;",
        "tags": [
            "variables",
            "let",
            "numbers"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check User Subscription",
        "problemId": 3,
        "slug": "check-user-subscription",
        "description": "Your app has a premium feature. To check if a user can access it, you need to store their subscription status. This value can only be either `true` or `false`.\n\nCreate a variable named `isSubscribed` and assign it the boolean value `true`.\n\nExample 1:\nInput: N/A\nOutput: true\nExplanation:\n  - Booleans represent logic gates (Yes/No).\n  - `true` does not need quotes.\n\nConstraints:\n- The variable name must be `isSubscribed`.\n- The value must be the boolean `true`.\n\nFollow-up: Why is `isSubscribed = 'true'` (with quotes) a bad practice?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "N/A",
                "output": "true",
                "explanation": "A boolean representing an active state.",
                "_id": "69bb029120287b94892eb5ad"
            }
        ],
        "constraints": [
            "Variable name isSubscribed",
            "Type must be boolean"
        ],
        "hints": [
            "Hint 1: true and false are keywords, not strings.",
            "Hint 2: `let isReady = false;`",
            "Hint 3: No quotes allowed around true!"
        ],
        "starterCode": "// Declare your boolean variable below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "isSubscribed is true",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5ae"
            },
            {
                "input": "Check type",
                "expected": "typeof isSubscribed is boolean",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5af"
            }
        ],
        "solutionCode": "let isSubscribed = true;",
        "tags": [
            "variables",
            "booleans"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The Undefined Box",
        "problemId": 4,
        "slug": "the-undefined-box",
        "description": "In JavaScript, if you create a variable but don't give it a value, what is inside it? It's not empty—it has a special value called `undefined`.\n\nDeclare a variable named `secretBox` using `let`, but **do not** assign it any value using the `=` operator.\n\nExample 1:\nInput: N/A\nOutput: undefined\nExplanation:\n  - Declaring `let x;` automatically sets x to `undefined`.\n\nConstraints:\n- Use `let` keyword.\n- Do NOT use an equals sign (`=`).\n- Name the variable `secretBox`.\n\nFollow-up: How is `undefined` different from `null`? (Hint: Think about 'not set' vs 'explicitly set to nothing')",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "let secretBox;",
                "output": "undefined",
                "explanation": "A variable without an assignment defaults to undefined.",
                "_id": "69bb029120287b94892eb5b1"
            }
        ],
        "constraints": [
            "Must not use = sign",
            "Variable name secretBox"
        ],
        "hints": [
            "Hint 1: Just end the line with a semicolon after the name.",
            "Hint 2: `let item;`",
            "Hint 3: Do not assign null or 0."
        ],
        "starterCode": "// Declare secretBox without assigning a value\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "secretBox is undefined",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5b2"
            }
        ],
        "solutionCode": "let secretBox;",
        "tags": [
            "variables",
            "undefined"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Explicit Empty Value",
        "problemId": 5,
        "slug": "explicit-empty-value",
        "description": "Sometimes, a developer wants to explicitly say 'this variable should exist, but it currently has NO value'. For this, we use `null`.\n\nCreate a variable named `userChoice` and assign it the value `null`.\n\nExample 1:\nInput: N/A\nOutput: null\nExplanation:\n  - `null` represents the intentional absence of any object value.\n\nConstraints:\n- Variable name must be `userChoice`.\n- Value must be `null`.\n\nFollow-up: If you check `typeof null`, why does JavaScript return `'object'`? (Historians call this a famous bug!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "N/A",
                "output": "null",
                "explanation": "Explicitly setting a variable to empty.",
                "_id": "69bb029120287b94892eb5b4"
            }
        ],
        "constraints": [
            "Variable name userChoice",
            "Value is null"
        ],
        "hints": [
            "Hint 1: `let data = null;`",
            "Hint 2: null is a keyword, no quotes."
        ],
        "starterCode": "// Assign null to userChoice\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "userChoice is null",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5b5"
            }
        ],
        "solutionCode": "let userChoice = null;",
        "tags": [
            "variables",
            "null"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Using typeof",
        "problemId": 6,
        "slug": "using-typeof",
        "description": "How do you check what 'type' of data is inside a variable? You use the `typeof` operator.\n\nThe system gives you a variable named `unknownData`. You need to find out its type.\n\nCreate a variable named `dataType` and assign it the result of using `typeof` on `unknownData`.\n\nExample 1:\nInput: unknownData = 42\nOutput: 'number'\nExplanation:\n  - `typeof 42` returns the string `'number'`.\n\nConstraints:\n- Do NOT declare `unknownData` (it's provided by the system).\n- Use the `typeof` operator.\n- Assign the result to `dataType`.\n\nFollow-up: What does `typeof typeof 5` return? (Think carefully!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "unknownData = 'Hello'",
                "output": "'string'",
                "explanation": "Checking the data class of the variable.",
                "_id": "69bb029120287b94892eb5b7"
            }
        ],
        "constraints": [
            "Must use typeof operator",
            "Assign to dataType"
        ],
        "hints": [
            "Hint 1: `let result = typeof variable;`",
            "Hint 2: dataType = typeof unknownData;"
        ],
        "starterCode": "// unknownData is already declared.\n// Your code here:\n",
        "testCases": [
            {
                "input": "unknownData = true",
                "expected": "dataType equals 'boolean'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5b8"
            }
        ],
        "solutionCode": "let dataType = typeof unknownData;",
        "tags": [
            "variables",
            "typeof",
            "meta-programming"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "BigInt Numbers",
        "problemId": 7,
        "slug": "bigint-numbers",
        "description": "Standard numbers in JavaScript have a limit. For really, really massive integers, we use `BigInt`.\n\nCreate a `BigInt` variable named `hugeNumber` with the value `9007199254740991`. You can do this by adding an `n` to the end of the number.\n\nExample 1:\nInput: N/A\nOutput: 9007199254740991n\nExplanation:\n  - The lowercase `n` suffix turns a normal integer into a BigInt.\n\nConstraints:\n- Variable name `hugeNumber`.\n- Value must be `9007199254740991n`.\n\nFollow-up: Can you add a `BigInt` to a normal `Number` directly? (Hint: No, you'll get a TypeError!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Variables & Data Types",
        "topicOrder": 1,
        "examples": [
            {
                "input": "N/A",
                "output": "9007199254740991n",
                "explanation": "A specialized integer type for absolute precision at scale.",
                "_id": "69bb029120287b94892eb5ba"
            }
        ],
        "constraints": [
            "Must include the n suffix",
            "Variable name hugeNumber"
        ],
        "hints": [
            "Hint 1: `let big = 100n;`",
            "Hint 2: Just type the number and put 'n' at the end."
        ],
        "starterCode": "// Create your BigInt below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "hugeNumber is 9007199254740991n",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5bb"
            },
            {
                "input": "Check type",
                "expected": "typeof hugeNumber is bigint",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5bc"
            }
        ],
        "solutionCode": "const hugeNumber = 9007199254740991n;",
        "tags": [
            "variables",
            "bigint",
            "numbers"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Basic Addition",
        "problemId": 8,
        "slug": "basic-addition",
        "description": "Topic 2: Operators. Time to do some math! The `+` operator adds two values.\n\nCreate two variables `numA = 10` and `numB = 20`. Then, create a third variable named `sum` and assign it the result of adding `numA` and `numB`.\n\nExample 1:\nInput: N/A\nOutput: 30\nExplanation:\n  - 10 + 20 equals 30.\n\nConstraints:\n- Declare `numA`, `numB`, and `sum`.\n- Use the `+` operator.\n\nFollow-up: What happens if you add a number and a string? (e.g. `5 + '5'`)?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "30",
                "explanation": "Performing standard arithmetic calculation.",
                "_id": "69bb029120287b94892eb5be"
            }
        ],
        "constraints": [
            "Use + operator",
            "Correct variable names"
        ],
        "hints": [
            "Hint 1: `let total = a + b;`",
            "Hint 2: numA = 10; numB = 20; sum = numA + numB;"
        ],
        "starterCode": "// Perform addition below\n",
        "testCases": [
            {
                "input": "Check sum",
                "expected": "sum equals 30",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5bf"
            }
        ],
        "solutionCode": "let numA = 10; let numB = 20; let sum = numA + numB;",
        "tags": [
            "operators",
            "arithmetic",
            "addition"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Calculate the Discount",
        "problemId": 9,
        "slug": "calculate-the-discount",
        "description": "Subtraction uses the `-` operator. You are buying a shirt for $50 and have a $10 coupon.\n\nCreate a variable `price = 50` and `coupon = 10`. Create a variable named `finalPrice` and subtract `coupon` from `price`.\n\nExample 1:\nInput: N/A\nOutput: 40\nExplanation:\n  - 50 minus 10 is 40.\n\nConstraints:\n- Use the `-` operator.\n- The result must be 40.\n\nFollow-up: What is the result of `0.1 + 0.2` in JavaScript? (Try it in your console, the answer might surprise you!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "40",
                "explanation": "Using subtraction to reduce a value.",
                "_id": "69bb029120287b94892eb5c1"
            }
        ],
        "constraints": [
            "Use - operator",
            "finalPrice must be 40"
        ],
        "hints": [
            "Hint 1: `let result = big - small;`",
            "Hint 2: price - coupon;"
        ],
        "starterCode": "// Perform subtraction below\n",
        "testCases": [
            {
                "input": "Check finalPrice",
                "expected": "finalPrice equals 40",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5c2"
            }
        ],
        "solutionCode": "let price = 50; let coupon = 10; let finalPrice = price - coupon;",
        "tags": [
            "operators",
            "arithmetic",
            "subtraction"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Area of a Square",
        "problemId": 10,
        "slug": "area-of-a-square",
        "description": "Multiplication uses the `*` operator. If a square has a side length of 4, the area is `side * side`.\n\nCreate a variable `side = 4`. Create a variable named `area` and calculate the multiplication of `side` by itself.\n\nExample 1:\nInput: N/A\nOutput: 16\nExplanation:\n  - 4 times 4 is 16.\n\nConstraints:\n- Use the `*` operator.\n- Result must be 16.\n\nFollow-up: What is the shorthand operator for calculating powers/exponents (like 4 to the power of 2)?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "16",
                "explanation": "Calculating area via multiplication.",
                "_id": "69bb029120287b94892eb5c4"
            }
        ],
        "constraints": [
            "Use * operator",
            "area must be 16"
        ],
        "hints": [
            "Hint 1: `let product = x * y;`",
            "Hint 2: side * side;"
        ],
        "starterCode": "// Perform multiplication below\n",
        "testCases": [
            {
                "input": "Check area",
                "expected": "area equals 16",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5c5"
            }
        ],
        "solutionCode": "let side = 4; let area = side * side;",
        "tags": [
            "operators",
            "arithmetic",
            "multiplication"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Division and Remainder",
        "problemId": 11,
        "slug": "division-and-remainder",
        "description": "Division uses `/`. But what if you only want to see what is 'left over' after a division? For that, we use the Modulo operator `%`.\n\nCreate a variable `totalApples = 10` and `friends = 3`. Create a variable named `leftOver` and calculate the remainder when `totalApples` is divided by `friends`.\n\nExample 1:\nInput: N/A\nOutput: 1\nExplanation:\n  - 10 divided by 3 is 3, with 1 left over.\n\nConstraints:\n- Use the `%` operator.\n- Result must be 1.\n\nFollow-up: How can you use the `%` operator to check if a number is even or odd?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "1",
                "explanation": "Extracting the remaining integer after division.",
                "_id": "69bb029120287b94892eb5c7"
            }
        ],
        "constraints": [
            "Use % operator",
            "leftOver must be 1"
        ],
        "hints": [
            "Hint 1: `let r = a % b;`",
            "Hint 2: 10 % 3;"
        ],
        "starterCode": "// Perform modulo operation below\n",
        "testCases": [
            {
                "input": "Check leftOver",
                "expected": "leftOver equals 1",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5c8"
            }
        ],
        "solutionCode": "let totalApples = 10; let friends = 3; let leftOver = totalApples % friends;",
        "tags": [
            "operators",
            "arithmetic",
            "modulo"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Increment the Counter",
        "problemId": 12,
        "slug": "increment-the-counter",
        "description": "Instead of writing `score = score + 1`, developers use a shorthand: `++`.\n\nCreate a variable `counter = 5`. On the next line, use the increment operator to increase `counter` by exactly 1.\n\nExample 1:\nInput: N/A\nOutput: 6\nExplanation:\n  - 5 becomes 6 using `++`.\n\nConstraints:\n- Use the `++` operator.\n- Result must be 6.\n\nFollow-up: What is the difference between `counter++` (postfix) and `++counter` (prefix)?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "6",
                "explanation": "Advancing a numerical state efficiently.",
                "_id": "69bb029120287b94892eb5ca"
            }
        ],
        "constraints": [
            "Use ++ operator",
            "counter must be 6"
        ],
        "hints": [
            "Hint 1: `variable++;`",
            "Hint 2: Create counter = 5, then counter++;"
        ],
        "starterCode": "// Increment the counter below\n",
        "testCases": [
            {
                "input": "Check counter",
                "expected": "counter equals 6",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5cb"
            }
        ],
        "solutionCode": "let counter = 5; counter++;",
        "tags": [
            "operators",
            "unary",
            "increment"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Shorthand Addition",
        "problemId": 13,
        "slug": "shorthand-addition",
        "description": "If you want to add 10 to a variable, you can write `wallet += 10`. This is the same as `wallet = wallet + 10`.\n\nCreate a variable `wallet = 20`. Use the `+=` operator to add `50` more to the `wallet`.\n\nExample 1:\nInput: N/A\nOutput: 70\nExplanation:\n  - 20 + 50 becomes 70.\n\nConstraints:\n- Use the `+=` operator.\n- Result must be 70.\n\nFollow-up: Does this work for other operators? (e.g. `*=`, `-=`, `/=`)?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "N/A",
                "output": "70",
                "explanation": "Adding to an existing value without re-typing the variable name.",
                "_id": "69bb029120287b94892eb5cd"
            }
        ],
        "constraints": [
            "Use += operator",
            "wallet must be 70"
        ],
        "hints": [
            "Hint 1: `a += b;`",
            "Hint 2: wallet += 50;"
        ],
        "starterCode": "// Use += below\n",
        "testCases": [
            {
                "input": "Check wallet",
                "expected": "wallet equals 70",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5ce"
            }
        ],
        "solutionCode": "let wallet = 20; wallet += 50;",
        "tags": [
            "operators",
            "assignment"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Strict Equality",
        "problemId": 14,
        "slug": "strict-equality",
        "description": "In JavaScript, never use `==`. Always use `===`. Why? Because `===` checks both the value AND the data type.\n\nCreate a variable `a = 5` and `b = '5'`. Create a variable named `isStrictlyEqual` and check if `a` is strictly equal to `b`.\n\nExample 1:\nInput: N/A\nOutput: false\nExplanation:\n  - Number 5 is not the same as String '5' when being strict.\n\nConstraints:\n- Use the `===` operator.\n- Name the boolean result `isStrictlyEqual`.\n\nFollow-up: Why is triple-equals called the 'strict equality' operator?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Operators",
        "topicOrder": 2,
        "examples": [
            {
                "input": "5 === '5'",
                "output": "false",
                "explanation": "Strict comparison prevents hidden type coercion.",
                "_id": "69bb029120287b94892eb5d0"
            }
        ],
        "constraints": [
            "Use === operator",
            "Result must be false"
        ],
        "hints": [
            "Hint 1: `let result = x === y;`",
            "Hint 2: 5 === '5' evaluates to false."
        ],
        "starterCode": "// Check strict equality below\n",
        "testCases": [
            {
                "input": "Check result",
                "expected": "isStrictlyEqual is false",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5d1"
            }
        ],
        "solutionCode": "let a = 5; let b = '5'; let isStrictlyEqual = a === b;",
        "tags": [
            "operators",
            "comparison",
            "equality"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String to Number",
        "problemId": 15,
        "slug": "string-to-number",
        "description": "Topic 3: Type Coercion. Sometimes you have a string like `'100'` and you need to turn it into a real number to do math.\n\nCreate a variable `strCount = '100'`. Create a variable named `realCount` and convert `strCount` to a number using the `Number()` function.\n\nExample 1:\nInput: strCount = '100'\nOutput: 100\nExplanation:\n  - The string is parsed into its numerical value.\n\nConstraints:\n- Use `Number(strCount)`.\n- Name the resulting variable `realCount`.\n\nFollow-up: What happens if you try to use `Number()` on a word like `'Hello'`? (Hint: It returns `NaN`!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "'123' -> 123",
                "output": "123",
                "explanation": "Explicitly changing a string into a number type.",
                "_id": "69bb029120287b94892eb5d3"
            }
        ],
        "constraints": [
            "Use Number() function",
            "realCount name required"
        ],
        "hints": [
            "Hint 1: `let num = Number('5');`",
            "Hint 2: realCount = Number(strCount);"
        ],
        "starterCode": "// Convert string to number below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "realCount equals 100",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5d4"
            },
            {
                "input": "Check type",
                "expected": "typeof realCount is number",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5d5"
            }
        ],
        "solutionCode": "let strCount = '100'; let realCount = Number(strCount);",
        "tags": [
            "coercion",
            "conversion",
            "numbers"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Number to String",
        "problemId": 16,
        "slug": "number-to-string",
        "description": "The opposite happens too! You might need to turn a number into a string for display.\n\nCreate a variable `age = 25`. Create a variable named `ageStr` and convert `age` to a string using the `String()` function.\n\nExample 1:\nInput: age = 25\nOutput: '25'\nExplanation:\n  - Numerical data is turned into readable text.\n\nConstraints:\n- Use `String(age)`.\n- Name the variable `ageStr`.\n\nFollow-up: Is there another way to do this using a method called `.toString()`?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "25 -> '25'",
                "output": "'25'",
                "explanation": "Explicit conversion to string format.",
                "_id": "69bb029120287b94892eb5d7"
            }
        ],
        "constraints": [
            "Use String() function",
            "ageStr must be a string"
        ],
        "hints": [
            "Hint 1: `let s = String(5);`",
            "Hint 2: ageStr = String(age);"
        ],
        "starterCode": "// Convert number to string below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "ageStr equals '25'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5d8"
            },
            {
                "input": "Check type",
                "expected": "typeof ageStr is string",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5d9"
            }
        ],
        "solutionCode": "let age = 25; let ageStr = String(age);",
        "tags": [
            "coercion",
            "conversion",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Boolean Conversion",
        "problemId": 17,
        "slug": "boolean-conversion",
        "description": "Every value in JavaScript is either 'truthy' or 'falsy'. Empty strings, 0, and null are falsy. Almost everything else is truthy.\n\nCreate a variable `testValue = 0`. Create a variable named `isTrue` and convert `testValue` to a boolean using the `Boolean()` function.\n\nExample 1:\nInput: testValue = 0\nOutput: false\nExplanation:\n  - 0 is a mathematically empty value, so it converts to `false`.\n\nConstraints:\n- Use `Boolean(testValue)`.\n- Name the variable `isTrue`.\n\nFollow-up: Is a string with a space `' '` truthy or falsy? (Hint: Truthy!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "0 -> false",
                "output": "false",
                "explanation": "Coercing a value into its logical truth representative.",
                "_id": "69bb029120287b94892eb5db"
            }
        ],
        "constraints": [
            "Use Boolean() function",
            "isTrue must be false"
        ],
        "hints": [
            "Hint 1: `let b = Boolean(0);`",
            "Hint 2: isTrue = Boolean(testValue);"
        ],
        "starterCode": "// Convert to boolean below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "isTrue is false",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5dc"
            }
        ],
        "solutionCode": "let testValue = 0; let isTrue = Boolean(testValue);",
        "tags": [
            "coercion",
            "truthy-falsy",
            "booleans"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Implicit Coercion Magic",
        "problemId": 18,
        "slug": "implicit-coercion-magic",
        "description": "JavaScript often tries to be helpful by converting types FOR you. This is called 'Implicit Coercion'.\n\nCreate a variable named `weirdResult` and assign it the result of `5 + '5'`. Use the `+` operator directly between the number and the string.\n\nExample 1:\nInput: N/A\nOutput: '55'\nExplanation:\n  - When a number meets a string with `+`, JavaScript turns the number into a string and glues them together.\n\nConstraints:\n- Perform math: `5 + '5'`.\n- Name result `weirdResult`.\n\nFollow-up: What is `5 - '5'`? (Hint: It's `0`. Subtraction ONLY works on numbers, so JS converts everything to numbers!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "5 + '5'",
                "output": "'55'",
                "explanation": "JavaScript prioritizes string concatenation over addition in mixed-type scenarios.",
                "_id": "69bb029120287b94892eb5de"
            }
        ],
        "constraints": [
            "Value must equal '55'",
            "Must use implicit addition"
        ],
        "hints": [
            "Hint 1: `let x = 10 + '20';`",
            "Hint 2: weirdResult = 5 + '5';"
        ],
        "starterCode": "// Demonstrate implicit coercion\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "weirdResult is '55'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5df"
            }
        ],
        "solutionCode": "let weirdResult = 5 + '5';",
        "tags": [
            "coercion",
            "implicit",
            "concatenation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Double NOT Trick",
        "problemId": 19,
        "slug": "double-not-trick",
        "description": "A quick way to convert any value to its real boolean state is using the `!!` (Double Not) operator. The first `!` flips it to the opposite boolean, and the second `!` flips it back to the correct boolean.\n\nCreate a variable `username = 'Ansh'`. Create a variable named `hasUsername` and use the `!!` operator on `username` to get its boolean state.\n\nExample 1:\nInput: username = 'Ansh'\nOutput: true\nExplanation:\n  - A non-empty string is truthy, so `!!` returns `true`.\n\nConstraints:\n- Use the `!!` operator.\n- Name the variable `hasUsername`.\n\nFollow-up: Why is this shorthand often preferred by developers over using `Boolean()`?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "!!'Apple'",
                "output": "true",
                "explanation": "Forcefully extracting the truth state of any variable.",
                "_id": "69bb029120287b94892eb5e1"
            }
        ],
        "constraints": [
            "Use !! operator",
            "hasUsername must be true"
        ],
        "hints": [
            "Hint 1: `let b = !!val;`",
            "Hint 2: hasUsername = !!username;"
        ],
        "starterCode": "// Use double bang conversion below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "hasUsername is true",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5e2"
            }
        ],
        "solutionCode": "let username = 'Ansh'; let hasUsername = !!username;",
        "tags": [
            "coercion",
            "boolean",
            "bang-bang"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Coercion Boundary (NaN)",
        "problemId": 20,
        "slug": "coercion-boundary-nan",
        "description": "What happens when math fails completely? JavaScript has a special value for this called `NaN` (Not a Number).\n\nCreate a variable named `brokeMath` and assign it the result of trying to convert the word `'Orange'` into a number using the `Number()` function.\n\nExample 1:\nInput: Number('Orange')\nOutput: NaN\nExplanation:\n  - You cannot turn a fruit into a number mathematically.\n\nConstraints:\n- Use `Number('Orange')`.\n- Name result `brokeMath`.\n\nFollow-up: If you check `typeof NaN`, it says `'number'`. How does that make sense?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Type Coercion",
        "topicOrder": 3,
        "examples": [
            {
                "input": "Number('abc')",
                "output": "NaN",
                "explanation": "Failed numerical parsing results in the NaN indicator.",
                "_id": "69bb029120287b94892eb5e4"
            }
        ],
        "constraints": [
            "Value must equal NaN",
            "Use Number() on a string literal"
        ],
        "hints": [
            "Hint 1: NaN is the result of impossible math.",
            "Hint 2: brokeMath = Number('Orange');"
        ],
        "starterCode": "// Create a NaN result below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "brokeMath is NaN",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5e5"
            }
        ],
        "solutionCode": "let brokeMath = Number('Orange');",
        "tags": [
            "coercion",
            "nan",
            "errors"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Concatenation",
        "problemId": 21,
        "slug": "string-concatenation",
        "description": "Topic 4: Strings. You can glue strings together using the `+` operator. This is called 'Concatenation'.\n\nCreate a variable `firstName = 'Shiv'` and `lastName = 'Mani'`. Create a variable named `fullName` and concatenate them with a space `' '` in between.\n\nExample 1:\nInput: firstName = 'Shiv', lastName = 'Mani'\nOutput: 'Shiv Mani'\nExplanation:\n  - The variables are joined with a space.\n\nConstraints:\n- Use the `+` operator.\n- Result must be 'Shiv Mani'.\n\nFollow-up: Why is it important to remember to manually add the space string `' '` when concatenating?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'Hello' + ' ' + 'World'",
                "output": "'Hello World'",
                "explanation": "Strings are immutable, so concatenation creates a brand-new combined string.",
                "_id": "69bb029120287b94892eb5e7"
            }
        ],
        "constraints": [
            "Use + operator",
            "fullName must be 'Shiv Mani'"
        ],
        "hints": [
            "Hint 1: `let full = first + ' ' + last;`",
            "Hint 2: Don't forget the quotes around the space!"
        ],
        "starterCode": "// Concatenate names below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "fullName equals 'Shiv Mani'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5e8"
            }
        ],
        "solutionCode": "let firstName = 'Shiv'; let lastName = 'Mani'; let fullName = firstName + ' ' + lastName;",
        "tags": [
            "strings",
            "concatenation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Template Literals",
        "problemId": 22,
        "slug": "template-literals",
        "description": "Modern JavaScript uses Backticks (`` ` ``) instead of quotes for strings. This allows you to inject variables directly using `${}`.\n\nCreate a variable `city = 'Delhi'`. Create a variable named `welcomeMessage` and assign it the string `'Welcome to Delhi'` using a template literal.\n\nExample 1:\nInput: city = 'Delhi'\nOutput: 'Welcome to Delhi'\nExplanation:\n  - `${city}` is replaced by the value of the variable.\n\nConstraints:\n- Use backticks (`` ` ``).\n- Use `${city}` for injection.\n\nFollow-up: Why are template literals easier to read than standard concatenation for long sentences?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "`Welcome to ${city}`",
                "output": "'Welcome to Delhi'",
                "explanation": "Dynamic string interpolation via native ES6 syntax.",
                "_id": "69bb029120287b94892eb5ea"
            }
        ],
        "constraints": [
            "Use backticks",
            "Use ${} syntax"
        ],
        "hints": [
            "Hint 1: `let msg = `Hello ${name}`;`",
            "Hint 2: welcomeMessage = `Welcome to ${city}`;"
        ],
        "starterCode": "// Use template literals below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "welcomeMessage equals 'Welcome to Delhi'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5eb"
            }
        ],
        "solutionCode": "let city = 'Delhi'; let welcomeMessage = `Welcome to ${city}`;",
        "tags": [
            "strings",
            "template-literals",
            "interpolation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Length",
        "problemId": 23,
        "slug": "string-length",
        "description": "Every string has a hidden property called `.length` that tells you exactly how many characters it contains (including spaces!).\n\nCreate a variable `username = 'JSArena'`. Create a variable named `nameCount` and assign it the length of the `username` string.\n\nExample 1:\nInput: username = 'JSArena'\nOutput: 7\nExplanation:\n  - J(1) S(2) A(3) r(4) e(5) n(6) a(7).\n\nConstraints:\n- Use the `.length` property.\n- Result must be 7.\n\nFollow-up: Is `.length` a function or a property? (Hint: It's a property, so you don't need parentheses `()`!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'cat'.length",
                "output": "3",
                "explanation": "Measuring string character counts via built-in properties.",
                "_id": "69bb029120287b94892eb5ed"
            }
        ],
        "constraints": [
            "Use .length",
            "nameCount must be 7"
        ],
        "hints": [
            "Hint 1: `let len = str.length;`",
            "Hint 2: nameCount = username.length;"
        ],
        "starterCode": "// Check string length below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "nameCount equals 7",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5ee"
            }
        ],
        "solutionCode": "let username = 'JSArena'; let nameCount = username.length;",
        "tags": [
            "strings",
            "properties",
            "length"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Accessing Characters",
        "problemId": 24,
        "slug": "accessing-characters",
        "description": "You can grab a single letter from a string using square brackets `[]`. Remember, programmers start counting at `0`!\n\nCreate a variable `code = 'JAVASCRIPT'`. Create a variable named `firstLetter` and assign it the first character of the string.\n\nExample 1:\nInput: code = 'JAVASCRIPT'\nOutput: 'J'\nExplanation:\n  - Index 0 is the start.\n\nConstraints:\n- Use bracket notation `[0]`.\n- Result must be 'J'.\n\nFollow-up: What happens if you try to access an index that doesn't exist (like `code[99]`)? (Hint: It returns `undefined`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'abc'[1]",
                "output": "'b'",
                "explanation": "Extracting specific characters via zero-indexed offsets.",
                "_id": "69bb029120287b94892eb5f0"
            }
        ],
        "constraints": [
            "Use index 0",
            "firstLetter must be 'J'"
        ],
        "hints": [
            "Hint 1: `let char = str[0];`",
            "Hint 2: firstLetter = code[0];"
        ],
        "starterCode": "// Access character below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "firstLetter equals 'J'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5f1"
            }
        ],
        "solutionCode": "let code = 'JAVASCRIPT'; let firstLetter = code[0];",
        "tags": [
            "strings",
            "indexing",
            "bracket-notation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Convert to Uppercase",
        "problemId": 25,
        "slug": "convert-to-uppercase",
        "description": "The method `.toUpperCase()` makes every letter in a string capital.\n\nCreate a variable `input = 'hello'`. Create a variable named `loudInput` and convert `input` to all capital letters.\n\nExample 1:\nInput: input = 'hello'\nOutput: 'HELLO'\nExplanation:\n  - All letters become uppercase.\n\nConstraints:\n- Use the `.toUpperCase()` method.\n- Remember to use parentheses `()` because it's a function.\n\nFollow-up: Does `.toUpperCase()` change the original variable or return a new string? (Hint: Strings are immutable, it returns a new one!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'dog'.toUpperCase()",
                "output": "'DOG'",
                "explanation": "Transforming string case via built-in methods.",
                "_id": "69bb029120287b94892eb5f3"
            }
        ],
        "constraints": [
            "Use .toUpperCase()",
            "loudInput must be 'HELLO'"
        ],
        "hints": [
            "Hint 1: `let up = val.toUpperCase();`",
            "Hint 2: loudInput = input.toUpperCase();"
        ],
        "starterCode": "// Convert to upper case below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "loudInput equals 'HELLO'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5f4"
            }
        ],
        "solutionCode": "let input = 'hello'; let loudInput = input.toUpperCase();",
        "tags": [
            "strings",
            "methods",
            "uppercase"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Includes",
        "problemId": 26,
        "slug": "string-includes",
        "description": "How do you check if a string contains a specific word? Use the `.includes()` method. It returns `true` or `false`.\n\nCreate a variable `email = 'user@gmail.com'`. Create a variable named `hasAtSymbol` and check if the email contains the character `'@'`.\n\nExample 1:\nInput: email = 'user@gmail.com'\nOutput: true\nExplanation:\n  - The '@' character is clearly present.\n\nConstraints:\n- Use the `.includes()` method.\n- Result must be true.\n\nFollow-up: Is `.includes()` case-sensitive? (Hint: Yes! Checking for 'A' in 'apple' will be false).",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'banana'.includes('nan')",
                "output": "true",
                "explanation": "Searching for substring existence.",
                "_id": "69bb029120287b94892eb5f6"
            }
        ],
        "constraints": [
            "Use .includes()",
            "hasAtSymbol must be true"
        ],
        "hints": [
            "Hint 1: `let found = target.includes('search');`",
            "Hint 2: hasAtSymbol = email.includes('@');"
        ],
        "starterCode": "// Check for inclusion below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "hasAtSymbol is true",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5f7"
            }
        ],
        "solutionCode": "let email = 'user@gmail.com'; let hasAtSymbol = email.includes('@');",
        "tags": [
            "strings",
            "searching",
            "includes"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Trim the Fat",
        "problemId": 27,
        "slug": "trim-the-fat",
        "description": "Users often accidentally add extra spaces at the beginning or end of their input. The `.trim()` method removes these leading and trailing spaces.\n\nCreate a variable `userInput = '   Ansh   '`. Create a variable named `cleanInput` and remove the extra spaces around it.\n\nExample 1:\nInput: userInput = '   Ansh   '\nOutput: 'Ansh'\nExplanation:\n  - Spaces at BOTH ends are stripped away.\n\nConstraints:\n- Use the `.trim()` method.\n- Result must be 'Ansh'.\n\nFollow-up: Does `.trim()` remove spaces that are in the middle of a string? (Hint: No, only the ends!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'  yo  '.trim()",
                "output": "'yo'",
                "explanation": "Cleaning user input whitespace artifacts.",
                "_id": "69bb029120287b94892eb5f9"
            }
        ],
        "constraints": [
            "Use .trim()",
            "cleanInput must be 'Ansh'"
        ],
        "hints": [
            "Hint 1: `let clean = messy.trim();`",
            "Hint 2: cleanInput = userInput.trim();"
        ],
        "starterCode": "// Trim whitespace below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "cleanInput equals 'Ansh'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5fa"
            }
        ],
        "solutionCode": "let userInput = '   Ansh   '; let cleanInput = userInput.trim();",
        "tags": [
            "strings",
            "formatting",
            "trim"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Slice",
        "problemId": 28,
        "slug": "string-slice",
        "description": "The `.slice(start, end)` method cuts out a piece of a string. The `end` index is NOT included in the cut.\n\nCreate a variable `filename = 'index.html'`. Create a variable named `nameOnly` and use `.slice()` to extract the word `'index'` (indices 0 to 5).\n\nExample 1:\nInput: filename = 'index.html'\nOutput: 'index'\nExplanation:\n  - We slice from 0 up to index 5.\n\nConstraints:\n- Use `.slice(0, 5)`.\n- Result must be 'index'.\n\nFollow-up: What happens if you only provide one argument to slice (e.g. `.slice(5)`)? (Hint: It cuts from that index to the end!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'apple'.slice(0, 2)",
                "output": "'ap'",
                "explanation": "Slicing string segments based on boundary index ranges.",
                "_id": "69bb029120287b94892eb5fc"
            }
        ],
        "constraints": [
            "Use .slice(0, 5)",
            "nameOnly must be 'index'"
        ],
        "hints": [
            "Hint 1: `let part = full.slice(0, 5);`",
            "Hint 2: nameOnly = filename.slice(0, 5);"
        ],
        "starterCode": "// Slice the string below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "nameOnly equals 'index'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb5fd"
            }
        ],
        "solutionCode": "let filename = 'index.html'; let nameOnly = filename.slice(0, 5);",
        "tags": [
            "strings",
            "slicing",
            "segments"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Finding Indices",
        "problemId": 29,
        "slug": "finding-indices",
        "description": "If you know a word but don't know WHERE it is in a string, use `.indexOf()`. It returns the number of the starting index.\n\nCreate a variable `sentence = 'Modern JavaScript is fun'`. Create a variable named `funIndex` and find the starting position of the word `'fun'`.\n\nExample 1:\nInput: sentence = 'Modern JavaScript is fun'\nOutput: 21\nExplanation:\n  - The word 'fun' begins at characters slot 21.\n\nConstraints:\n- Use the `.indexOf()` method.\n- Result must be 21.\n\nFollow-up: What does `.indexOf()` return if the word you are looking for is NOT in the string? (Hint: It returns `-1`!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'cats'.indexOf('t')",
                "output": "2",
                "explanation": "Finding the numerical offset of a character/word.",
                "_id": "69bb029120287b94892eb5ff"
            }
        ],
        "constraints": [
            "Use .indexOf('fun')",
            "funIndex must be 21"
        ],
        "hints": [
            "Hint 1: `let i = sentence.indexOf('word');`",
            "Hint 2: funIndex = sentence.indexOf('fun');"
        ],
        "starterCode": "// Find index below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "funIndex equals 21",
                "isHidden": false,
                "_id": "69bb029120287b94892eb600"
            }
        ],
        "solutionCode": "let sentence = 'Modern JavaScript is fun'; let funIndex = sentence.indexOf('fun');",
        "tags": [
            "strings",
            "searching",
            "index-of"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Replacement",
        "problemId": 30,
        "slug": "string-replacement",
        "description": "The `.replace()` method swaps one word for another. By default, it ONLY replaces the very first match it finds.\n\nCreate a variable `wrongWord = 'I like Python'`. Create a variable named `rightWord` and use `.replace()` to swap `'Python'` with `'JavaScript'`.\n\nExample 1:\nInput: wrongWord = 'I like Python'\nOutput: 'I like JavaScript'\nExplanation:\n  - The word 'Python' is removed and 'JavaScript' is inserted.\n\nConstraints:\n- Use the `.replace()` method.\n- Result must be 'I like JavaScript'.\n\nFollow-up: If you want to replace ALL matches in a string, what newer method should you use instead of `.replace()`? (Hint: `.replaceAll()`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 4,
        "examples": [
            {
                "input": "'red car'.replace('red', 'blue')",
                "output": "'blue car'",
                "explanation": "Subsituting string fragments with new values.",
                "_id": "69bb029120287b94892eb602"
            }
        ],
        "constraints": [
            "Use .replace()",
            "rightWord must be correct"
        ],
        "hints": [
            "Hint 1: `let final = old.replace('from', 'to');`",
            "Hint 2: rightWord = wrongWord.replace('Python', 'JavaScript');"
        ],
        "starterCode": "// Replace string contents below\n",
        "testCases": [
            {
                "input": "Check value",
                "expected": "rightWord equals 'I like JavaScript'",
                "isHidden": false,
                "_id": "69bb029120287b94892eb603"
            }
        ],
        "solutionCode": "let wrongWord = 'I like Python'; let rightWord = wrongWord.replace('Python', 'JavaScript');",
        "tags": [
            "strings",
            "subsitution",
            "replace"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Calculate Absolute Distance",
        "problemId": 31,
        "slug": "calculate-absolute-distance",
        "description": "You are developing a 2D racing game where a drone flies left and right along an axis. The drone's current position is given by the variable `dronePosition`, and the target finishing line is given by the variable `flagPosition`.\n\nYou need to calculate the exact distance between the drone and the flag. However, if the drone drives past the flag, subtracting their positions might result in a negative number (e.g., `-5` meters). Distance is a physical measurement and must always be a positive number.\n\nCreate a variable named `distanceToFlag` and use the built-in `Math.abs()` function to ensure the difference between the two positions is always represented as a positive absolute value.\n\nExample 1:\nInput: dronePosition = 10, flagPosition = 25\nOutput: 15\nExplanation:\n  - The flag is at 25, the drone is at 10.\n  - `10 - 25 = -15`.\n  - The absolute value of -15 is 15. The drone is successfully calculated as 15 units away.\n\nExample 2:\nInput: dronePosition = 50, flagPosition = 50\nOutput: 0\nExplanation:\n  - `50 - 50 = 0`. The absolute value of 0 is 0. The drone is exactly on the target.\n\nConstraints:\n- Do NOT declare `dronePosition` or `flagPosition`.\n- You MUST create `let distanceToFlag`.\n- You MUST use `Math.abs()` to sanitize the calculation.\n\nFollow-up: What does `Math.abs()` return if you pass it a string like `'-20'` instead of a number?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.abs(10 - 25)",
                "output": "15",
                "explanation": "Calculates the difference and strips away the negative sign.",
                "_id": "69baffa5c3a069391bd17976"
            }
        ],
        "constraints": [
            "Must declare distanceToFlag",
            "Must use Math.abs()",
            "Must calculate the difference using subtraction"
        ],
        "hints": [
            "Hint 1: First, subtract the positions from each other (dronePosition - flagPosition).",
            "Hint 2: Wrap that entire mathematical calculation inside the Math.abs() parentheses.",
            "Hint 3: let distanceToFlag = Math.abs(dronePosition - flagPosition);"
        ],
        "starterCode": "// 'dronePosition' and 'flagPosition' are provided.\n// Create 'distanceToFlag' below.\n",
        "testCases": [
            {
                "input": "dronePosition=10, flagPosition=20",
                "expected": "distanceToFlag is exactly 10",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17977"
            },
            {
                "input": "dronePosition=30, flagPosition=10",
                "expected": "distanceToFlag is exactly 20, overcoming the negative result",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17978"
            },
            {
                "input": "dronePosition=15, flagPosition=15",
                "expected": "distanceToFlag is 0",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17979"
            }
        ],
        "solutionCode": "// Step 1: Subtract the coordinates to get the physical difference.\n// Step 2: Pass that math directly into Math.abs() to ensure it's a positive distance metric.\nlet distanceToFlag = Math.abs(dronePosition - flagPosition);",
        "tags": [
            "numbers",
            "math",
            "absolute"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Rounding Checkout Prices",
        "problemId": 32,
        "slug": "rounding-checkout-prices",
        "description": "You are building the tax calculation module for an online store. When sales tax is applied to a shopping cart, the final total often ends up with strange decimals, like `14.995` or `14.232`. Real-world currency needs to be cleanly rounded.\n\nThe system provides a variable named `rawTotal` containing a highly precise float number.\n\nCreate a variable named `roundedTotal` and use JavaScript's built-in rounding function to round `rawTotal` to the nearest whole number. If the decimal is `.5` or higher, it should round up. Otherwise, it rounds down.\n\nExample 1:\nInput: rawTotal = 99.50\nOutput: 100\nExplanation:\n  - The decimal is exactly `.5`.\n  - The standard rounding rule pushes it to the next highest integer, making it `100`.\n\nExample 2:\nInput: rawTotal = 33.49\nOutput: 33\nExplanation:\n  - The decimal is `.49`, which is less than `.5`.\n  - It rounds down to `33`.\n\nConstraints:\n- Do NOT declare `rawTotal`.\n- You MUST create `let roundedTotal`.\n- You MUST use `Math.round()`.\n\nFollow-up: How would you round specifically to TWO decimal places instead of a whole integer?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.round(99.50)",
                "output": "100",
                "explanation": "Follows standard arithmetic rounding rules.",
                "_id": "69baffa5c3a069391bd1797b"
            }
        ],
        "constraints": [
            "Must use Math.round()",
            "Do not use manual arithmetic to round"
        ],
        "hints": [
            "Hint 1: The Math object has a method specifically named 'round'.",
            "Hint 2: Pass the raw variable into the function's parentheses.",
            "Hint 3: let roundedTotal = Math.round(rawTotal);"
        ],
        "starterCode": "// 'rawTotal' is provided.\n// Create 'roundedTotal' by rounding it to the nearest integer.\n",
        "testCases": [
            {
                "input": "rawTotal=10.5",
                "expected": "roundedTotal is 11",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1797c"
            },
            {
                "input": "rawTotal=10.499",
                "expected": "roundedTotal is 10",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1797d"
            },
            {
                "input": "rawTotal=-5.5",
                "expected": "roundedTotal is -5 — beware of how JS rounds negatives (it rounds towards positive infinity)",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd1797e"
            }
        ],
        "solutionCode": "// Step 1: Use Math.round to natively snap the float to the nearest whole integer based on .5 proximity.\nlet roundedTotal = Math.round(rawTotal);",
        "tags": [
            "numbers",
            "math",
            "round"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Forced Pricing Tactics",
        "problemId": 33,
        "slug": "forced-pricing-tactics",
        "description": "You work for an aggressive ride-sharing app. The executives have mandated a controversial pricing tactic: if a ride costs `12.01` dollars based on mileage, the system must forcefully round the price UP to the next full dollar, charging them `13.00`.\n\nThe system provides `mileageCost`, a float number.\n\nCreate a variable named `surgePrice` and use the specific Math method that ALWAYS rounds numbers UP to the nearest integer, regardless of how small the decimal is.\n\nExample 1:\nInput: mileageCost = 25.1\nOutput: 26\nExplanation:\n  - Even though the decimal `.1` normally rounds down to 25, the 'ceiling' algorithm forces it up to the next integer, 26.\n\nExample 2:\nInput: mileageCost = 40.0\nOutput: 40\nExplanation:\n  - Since there is no decimal piece to trigger upward movement, it remains precisely 40.\n\nConstraints:\n- Do NOT declare `mileageCost`.\n- You MUST create `let surgePrice`.\n- You MUST use `Math.ceil()`.\n\nFollow-up: What is the counterpart to `Math.ceil()` that forcefully rounds DOWN?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.ceil(25.1)",
                "output": "26",
                "explanation": "Forces trajectory conceptually 'upwards' to the ceiling integer.",
                "_id": "69baffa5c3a069391bd17980"
            }
        ],
        "constraints": [
            "Must use Math.ceil()",
            "Do not use Math.round()"
        ],
        "hints": [
            "Hint 1: Think about the top of a room. What is the opposite of the floor?",
            "Hint 2: Call `Math.ceil()` on the cost.",
            "Hint 3: let surgePrice = Math.ceil(mileageCost);"
        ],
        "starterCode": "// 'mileageCost' is provided.\n// Create 'surgePrice' below.\n",
        "testCases": [
            {
                "input": "mileageCost=10.1",
                "expected": "surgePrice is 11",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17981"
            },
            {
                "input": "mileageCost=10.9",
                "expected": "surgePrice is 11",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17982"
            },
            {
                "input": "mileageCost=-5.9",
                "expected": "surgePrice is -5 — moving 'up' on a number line makes it less negative",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17983"
            }
        ],
        "solutionCode": "// Step 1: Use Math.ceil to forcefully round the float up to the next greatest integer.\nlet surgePrice = Math.ceil(mileageCost);",
        "tags": [
            "numbers",
            "math",
            "ceil"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "High Score Calculation",
        "problemId": 34,
        "slug": "high-score-calculation",
        "description": "You are processing the post-game summary for an arcade game. You need to determine the maximum score achieved across three separate rounds.\n\nThe system gives you three variables: `round1`, `round2`, and `round3` (all numbers).\n\nCreate a variable named `highestScore` and use a built-in function to find and isolate the largest of these three numbers.\n\nExample 1:\nInput: round1 = 450, round2 = 980, round3 = 210\nOutput: 980\nExplanation:\n  - The function analyzes all three numbers sequentially.\n  - 980 is numerically the largest, so it is returned as the highest score.\n\nExample 2:\nInput: round1 = -50, round2 = -50, round3 = -50\nOutput: -50\nExplanation:\n  - If all scores are equal, it successfully returns that equal value.\n\nConstraints:\n- Do NOT declare the round variables.\n- You MUST create `let highestScore`.\n- You MUST use `Math.max()`.\n\nFollow-up: How would you find the maximum number inside of an Array rather than individual variables?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.max(450, 980, 210)",
                "output": "980",
                "explanation": "Calculates the maximum value from a list of arguments.",
                "_id": "69baffa5c3a069391bd17985"
            }
        ],
        "constraints": [
            "Must use Math.max()",
            "Pass all three variables as arguments",
            "Assign result to highestScore"
        ],
        "hints": [
            "Hint 1: Math.max can accept multiple arguments separated by commas.",
            "Hint 2: `Math.max(varA, varB, varC)`",
            "Hint 3: let highestScore = Math.max(round1, round2, round3);"
        ],
        "starterCode": "// 'round1', 'round2', and 'round3' are provided.\n// Create 'highestScore' below.\n",
        "testCases": [
            {
                "input": "round1=10, round2=50, round3=20",
                "expected": "highestScore is exactly 50",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17986"
            },
            {
                "input": "round1=-10, round2=-5, round3=-1",
                "expected": "highestScore is exactly -1",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17987"
            },
            {
                "input": "round1=100, round2=100, round3=100",
                "expected": "highestScore is exactly 100",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17988"
            }
        ],
        "solutionCode": "// Step 1: Feed all three variables into the Math.max method.\n// Step 2: It returns the largest one natively. Assign it.\nlet highestScore = Math.max(round1, round2, round3);",
        "tags": [
            "numbers",
            "math",
            "maximum"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Random Loot Drops",
        "problemId": 35,
        "slug": "random-loot-drops",
        "description": "In your RPG game, enemies drop gold coins when defeated. Instead of dropping the exact same amount every time, you want the amount to fluctuate slightly for excitement. The current algorithm dictates they drop a massive, highly-precise decimal fraction of gold, which looks terrible on the UI.\n\nThe system has pre-generated a massive decimal inside `rawLootDrop` (e.g., `14.8392019`).\n\nYou need to clean this up. Create a variable named `cleanLoot` and strip away ALL of the decimal numbers so it is a whole integer. However, you cannot mathematically round it — you must literally chop off the decimals, leaving the integer untouched.\n\nExample 1:\nInput: rawLootDrop = 14.8392019\nOutput: 14\nExplanation:\n  - Even though `.8` would normally round UP to 15, we are TRUNCATING the number. We slice off the `.8392019` entirely, leaving precisely 14.\n\nExample 2:\nInput: rawLootDrop = -7.99\nOutput: -7\nExplanation:\n  - Slicing off the decimal logic works for negative numbers as well, preserving the `-7` without rounding it 'down' to `-8`.\n\nConstraints:\n- Do NOT declare `rawLootDrop`.\n- You MUST create `let cleanLoot`.\n- You MUST use `Math.trunc()`.\n- Do NOT use `Math.floor()` or `Math.round()`.\n\nFollow-up: What is the functional difference between `Math.trunc()` and `Math.floor()`?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.trunc(14.8)",
                "output": "14",
                "explanation": "Eliminates the fractional component of the number entirely.",
                "_id": "69baffa5c3a069391bd1798a"
            }
        ],
        "constraints": [
            "Must use Math.trunc()",
            "Do not use Floor or Round"
        ],
        "hints": [
            "Hint 1: 'Truncate' means to shorten by cutting off the end.",
            "Hint 2: Call `Math.trunc()`.",
            "Hint 3: let cleanLoot = Math.trunc(rawLootDrop);"
        ],
        "starterCode": "// 'rawLootDrop' is provided.\n// Create 'cleanLoot' below by truncating the decimal.\n",
        "testCases": [
            {
                "input": "rawLootDrop=10.999",
                "expected": "cleanLoot is 10, completely ignoring rounding logic",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1798b"
            },
            {
                "input": "rawLootDrop=-5.5",
                "expected": "cleanLoot is -5 (floor would have given -6)",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1798c"
            },
            {
                "input": "rawLootDrop=100",
                "expected": "cleanLoot is 100",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd1798d"
            }
        ],
        "solutionCode": "// Step 1: Use Math.trunc to aggressively slice off any fractional digits.\nlet cleanLoot = Math.trunc(rawLootDrop);",
        "tags": [
            "numbers",
            "math",
            "truncation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Fixing Float Precision (Snowball)",
        "problemId": 36,
        "slug": "fixing-float-precision",
        "description": "You are calculating the total cost of 3 specific items in a cart. The cost is stored in `cartCalculation`, but due to JavaScript's floating-point math quirks, it evaluates to `10.200000000000001` instead of `10.20`.\n\nCreate a variable named `receiptText` and fix this number so it is formatted exactly to TWO decimal places.\n\nImportant Catch: Once formatted, you must prepend the literal string `'Total: $'` using string concatenation or template literals. (Snowball: Math + Strings).\n\nExample 1:\nInput: cartCalculation = 10.200000000000001\nOutput: 'Total: $10.20'\nExplanation:\n  - The built-in `.toFixed(2)` method rounds the raw number down to '10.20'.\n  - Wait, `.toFixed()` returns a STRING, not a number! This makes it perfectly ready to combine with `'Total: $'`.\n\nExample 2:\nInput: cartCalculation = 5\nOutput: 'Total: $5.00'\nExplanation:\n  - `.toFixed(2)` adds missing zeros to ensure currency formatting is respected.\n\nConstraints:\n- Do NOT declare `cartCalculation`.\n- You MUST create `let receiptText`.\n- You MUST use `.toFixed(2)`.\n\nFollow-up: Because `.toFixed()` converts a Number to a String, how do you convert it back to a Number if you needed to do more math?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "`Total: $${10.2000001.toFixed(2)}`",
                "output": "'Total: $10.20'",
                "explanation": "Executes the method inside interpolation, fixing the decimals and formatting the sentence.",
                "_id": "69baffa5c3a069391bd1798f"
            }
        ],
        "constraints": [
            "Must use .toFixed(2)",
            "Must format exactly as 'Total: $XX.XX'",
            "Must declare receiptText"
        ],
        "hints": [
            "Hint 1: Use `cartCalculation.toFixed(2)` to generate the string representation of the price.",
            "Hint 2: Use Template Literals (backticks) to merge it with the required text.",
            "Hint 3: let receiptText = `Total: $${cartCalculation.toFixed(2)}`;"
        ],
        "starterCode": "// 'cartCalculation' is provided.\n// Create 'receiptText' below.\n",
        "testCases": [
            {
                "input": "cartCalculation=14.9999",
                "expected": "receiptText equals 'Total: $15.00'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17990"
            },
            {
                "input": "cartCalculation=8",
                "expected": "receiptText equals 'Total: $8.00'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17991"
            },
            {
                "input": "cartCalculation=0",
                "expected": "receiptText equals 'Total: $0.00'",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17992"
            }
        ],
        "solutionCode": "// Step 1: Call toFixed(2) on the raw number, causing it to return a formatted string.\n// Step 2: Interpolate that newly formatted string into the final message.\nlet receiptText = `Total: $${cartCalculation.toFixed(2)}`;",
        "tags": [
            "numbers",
            "tofixed",
            "strings",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Validate Safe Integers",
        "problemId": 37,
        "slug": "validate-safe-integers",
        "description": "You are building the backend for a crypto trading platform. Users are transferring extremely large quantities of micro-tokens. JavaScript uses a 64-bit floating point system, meaning if a number gets too incredibly large, it loses precision and starts rounding off digits silently, destroying user funds!\n\nThe system provides `transactionAmount`.\n\nCreate a variable named `isTransactionSafe` and use a built-in `Number` utility function to verify if the number is safely within JavaScript's integer precision limits. It should yield a boolean `true` if it's safe to process, and `false` if it is dangerously huge.\n\nExample 1:\nInput: transactionAmount = 9007199254740991\nOutput: true\nExplanation:\n  - This exactly equals `Number.MAX_SAFE_INTEGER`. It is deemed safe.\n\nExample 2:\nInput: transactionAmount = 9007199254740992\nOutput: false\nExplanation:\n  - This breaches the maximum safe limit. Math operations on this number will begin failing or hallucinating digits.\n\nConstraints:\n- Do NOT declare `transactionAmount`.\n- You MUST create `let isTransactionSafe`.\n- You MUST use `Number.isSafeInteger()`.\n\nFollow-up: What relatively new JavaScript feature (a primitive type ending with 'n') allows tracking integers infinitely large?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Number.isSafeInteger(100)",
                "output": "true",
                "explanation": "Validates the integer is structurally safe to calculate with.",
                "_id": "69baffa5c3a069391bd17994"
            }
        ],
        "constraints": [
            "Must use Number.isSafeInteger()",
            "Assign result to isTransactionSafe"
        ],
        "hints": [
            "Hint 1: The `Number` object has a specific validation method for safe integers.",
            "Hint 2: It is called `isSafeInteger()`.",
            "Hint 3: let isTransactionSafe = Number.isSafeInteger(transactionAmount);"
        ],
        "starterCode": "// 'transactionAmount' is provided.\n// Create 'isTransactionSafe' below.\n",
        "testCases": [
            {
                "input": "transactionAmount=1000",
                "expected": "isTransactionSafe is true",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17995"
            },
            {
                "input": "transactionAmount=9007199254740992",
                "expected": "isTransactionSafe is false",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17996"
            },
            {
                "input": "transactionAmount=10.5",
                "expected": "isTransactionSafe is false (decimals are not safe integers)",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17997"
            }
        ],
        "solutionCode": "// Step 1: Use Number.isSafeInteger() to confirm the value fits inside the 64 bit Float mantissa safely.\n// Step 2: Store the true/false evaluation limit result.\nlet isTransactionSafe = Number.isSafeInteger(transactionAmount);",
        "tags": [
            "numbers",
            "math",
            "limits"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Calculate the Circle's Area",
        "problemId": 38,
        "slug": "calculate-the-circles-area",
        "description": "You are building a geometry tool for architecture students. They need to calculate the precise area of a circle based on its radius.\n\nThe system provides `circleRadius`.\n\nThe formula for the area of a circle is `π * r²`. You must use `Math.PI` for Pi, and `Math.pow()` to square the radius.\n\nCreate a variable named `exactArea`. Compute the area using those two built-in Math features.\n\nExample 1:\nInput: circleRadius = 5\nOutput: 78.53981633974483\nExplanation:\n  - 5 squared is 25.\n  - 25 multiplied by Math.PI yields 78.539...\n\nConstraints:\n- Do NOT declare `circleRadius`.\n- You MUST create `let exactArea`.\n- You MUST use `Math.PI` (do not type 3.14 yourself).\n- You MUST use `Math.pow()` for the exponent.\n\nFollow-up: In modern JS, what operator can you use to square a number instead of `Math.pow()`?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Numbers & Math",
        "topicOrder": 5,
        "examples": [
            {
                "input": "Math.PI * Math.pow(5, 2)",
                "output": "78.53981633974483",
                "explanation": "Calculates circle area formula completely procedurally.",
                "_id": "69baffa5c3a069391bd17999"
            }
        ],
        "constraints": [
            "Must use Math.PI",
            "Must use Math.pow()",
            "Do not round the result"
        ],
        "hints": [
            "Hint 1: `Math.pow(base, exponent)` takes two arguments. You want 2 as your exponent.",
            "Hint 2: Multiply the result of `Math.pow` by `Math.PI`.",
            "Hint 3: let exactArea = Math.PI * Math.pow(circleRadius, 2);"
        ],
        "starterCode": "// 'circleRadius' is provided.\n// Create 'exactArea' below.\n",
        "testCases": [
            {
                "input": "circleRadius=2",
                "expected": "exactArea is roughly 12.566",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1799a"
            },
            {
                "input": "circleRadius=1",
                "expected": "exactArea is exactly Math.PI",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1799b"
            },
            {
                "input": "AST check",
                "expected": "code structurally utilizes both Math.PI and Math.pow",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd1799c"
            }
        ],
        "solutionCode": "// Step 1: Use Math.pow to square the radius input.\n// Step 2: Multiply the squared radius by the constant Math.PI.\nlet exactArea = Math.PI * Math.pow(circleRadius, 2);",
        "tags": [
            "numbers",
            "math",
            "geometry",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Basic Access Control",
        "problemId": 39,
        "slug": "basic-access-control",
        "description": "Topic 6: Control Flow unlocked. You no longer just assign values based on operators — you can now execute entirely different blocks of code based on logic checks!\n\nYou are writing the security check for a website restricted to adults. The system provides `userAge` (a number).\n\nCreate a variable `entryStatus`. Then, write an `if`/`else` statement:\n- If `userAge` is strictly greater than or equal to 18, assign `'Granted'` to `entryStatus`.\n- Else, assign `'Denied'` to `entryStatus`.\n\nExample 1:\nInput: userAge = 20\nOutput: 'Granted'\nExplanation:\n  - The `if(userAge >= 18)` condition evaluates to true. The first code block executes.\n\nExample 2:\nInput: userAge = 16\nOutput: 'Denied'\nExplanation:\n  - The first condition is false. The code directly falls into the `else` block.\n\nConstraints:\n- Do NOT declare `userAge`.\n- You MUST define `let entryStatus;` first (without assigning it).\n- You MUST use an `if`/`else` code block.\n\nFollow-up: What happens if `userAge` is a string like `'18'` instead of a number?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "if (20 >= 18)",
                "output": "'Granted'",
                "explanation": "Executes logic based on boolean evaluation.",
                "_id": "69baffa5c3a069391bd1799e"
            }
        ],
        "constraints": [
            "Must declare entryStatus uninitialized",
            "Must use if and else blocks"
        ],
        "hints": [
            "Hint 1: First line: `let entryStatus;`",
            "Hint 2: Next, open an if statement: `if (userAge >= 18) { ... }`",
            "Hint 3: Finally, add the else block: `else { ... }`"
        ],
        "starterCode": "// 'userAge' is provided.\n// Declare 'entryStatus' and use if/else to assign its value.\n",
        "testCases": [
            {
                "input": "userAge=18",
                "expected": "entryStatus is exactly 'Granted'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd1799f"
            },
            {
                "input": "userAge=17",
                "expected": "entryStatus is exactly 'Denied'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179a0"
            },
            {
                "input": "AST check",
                "expected": "code contains an IfStatement",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179a1"
            }
        ],
        "solutionCode": "// Step 1: Declare the variable to hold the decision.\nlet entryStatus;\n// Step 2: Write the conditional logic branch.\nif (userAge >= 18) {\n  entryStatus = 'Granted';\n} else {\n  entryStatus = 'Denied';\n}",
        "tags": [
            "control-flow",
            "if-else",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Tiered Reward System",
        "problemId": 40,
        "slug": "tiered-reward-system",
        "description": "You are coding the reward system for a video game. Players earn a title depending on how many points they score. You need multiple branches of logic.\n\nThe system provides `score`.\nCreate a variable `playerTitle`.\n\nUsing `if`, `else if`, and `else`:\n- If `score` is 1000 or greater, set `playerTitle` to `'Champion'`.\n- Else, if `score` is 500 or greater, set `playerTitle` to `'Veteran'`.\n- Else, set `playerTitle` to `'Rookie'`.\n\nExample 1:\nInput: score = 600\nOutput: 'Veteran'\nExplanation:\n  - Top branch `score >= 1000` is false.\n  - Second branch `score >= 500` is true. The block executes, bypassing the final else.\n\nConstraints:\n- Do NOT declare `score`.\n- You MUST define `let playerTitle;`.\n- You MUST use `if`, `else if`, and `else`.\n\nFollow-up: Does the order of the `if` and `else if` conditions matter in this scenario?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "score = 600",
                "output": "'Veteran'",
                "explanation": "Cascades down the logic tree until it finds a true condition.",
                "_id": "69baffa5c3a069391bd179a3"
            }
        ],
        "constraints": [
            "Must use if, else if, and else blocks",
            "Must check the highest value first"
        ],
        "hints": [
            "Hint 1: `if (score >= 1000)` goes first.",
            "Hint 2: `else if (score >= 500)` goes second.",
            "Hint 3: `else` acts as the default catch-all at the bottom."
        ],
        "starterCode": "// 'score' is provided.\n// Declare 'playerTitle' and use if/else if/else to assign it.\n",
        "testCases": [
            {
                "input": "score=1200",
                "expected": "playerTitle is 'Champion'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179a4"
            },
            {
                "input": "score=500",
                "expected": "playerTitle is 'Veteran'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179a5"
            },
            {
                "input": "score=499",
                "expected": "playerTitle is 'Rookie'",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179a6"
            }
        ],
        "solutionCode": "let playerTitle;\n// Step 1: Check highest ceiling first.\nif (score >= 1000) {\n  playerTitle = 'Champion';\n// Step 2: Check middle tier second.\n} else if (score >= 500) {\n  playerTitle = 'Veteran';\n// Step 3: Default fallback.\n} else {\n  playerTitle = 'Rookie';\n}",
        "tags": [
            "control-flow",
            "if-else-if",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Nested Logic Gates",
        "problemId": 41,
        "slug": "nested-logic-gates",
        "description": "You are building a discount system for a movie theater. There are different sets of rules depending on whether it is the weekend or a weekday.\n\nThe system provides two variables: `isWeekend` (boolean) and `customerAge` (number).\nCreate a variable named `ticketPrice`.\n\nUsing an `if` block with another `if` nested inside it:\n- If `isWeekend` is true, the price is flat. Set `ticketPrice` to 15.\n- Else (it is a weekday):\n  - If `customerAge` is less than 12, set `ticketPrice` to 8.\n  - Else, set `ticketPrice` to 10.\n\nExample 1:\nInput: isWeekend = false, customerAge = 10\nOutput: 8\nExplanation:\n  - The top-level `isWeekend` check evaluates to false, jumping to the `else` block.\n  - Inside the `else` block, the child `customerAge < 12` check evaluates to true, assigning 8.\n\nConstraints:\n- Do NOT declare `isWeekend` or `customerAge`.\n- You MUST declare `let ticketPrice;` before the blocks.\n- You MUST use a nested `if` structure inside the outer `else`.\n\nFollow-up: Why use nested `if`s instead of flattening the logic with `&&` operators?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "isWeekend=false, customerAge=25",
                "output": "10",
                "explanation": "If/Else blocks evaluate sequentially down the nested branches.",
                "_id": "69baffa5c3a069391bd179a8"
            }
        ],
        "constraints": [
            "Must use if/else branching",
            "Must nest an if block inside an else block"
        ],
        "hints": [
            "Hint 1: Outer block: `if(isWeekend) { ... } else { ... }`",
            "Hint 2: Inner block goes inside the else: `if(customerAge < 12) { ... } else { ... }`",
            "Hint 3: let ticketPrice; if(isWeekend) { ticketPrice = 15; } else { if(customerAge < 12) { ticketPrice = 8; } else { ticketPrice = 10; } }"
        ],
        "starterCode": "// 'isWeekend' and 'customerAge' are provided.\n// Declare 'ticketPrice' and use nested if/else logic below.\n",
        "testCases": [
            {
                "input": "isWeekend=true, customerAge=99",
                "expected": "ticketPrice equals 15",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179a9"
            },
            {
                "input": "isWeekend=false, customerAge=8",
                "expected": "ticketPrice equals 8",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179aa"
            },
            {
                "input": "isWeekend=false, customerAge=30",
                "expected": "ticketPrice equals 10",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179ab"
            }
        ],
        "solutionCode": "let ticketPrice;\n// Step 1: Open the master branch checking the day.\nif (isWeekend) {\n  ticketPrice = 15;\n} else {\n  // Step 2: Open a nested child branch checking age thresholds.\n  if (customerAge < 12) {\n    ticketPrice = 8;\n  } else {\n    ticketPrice = 10;\n  }\n}",
        "tags": [
            "control-flow",
            "nested-if",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Ternary Operator: Quick Decisions",
        "problemId": 42,
        "slug": "ternary-operator-quick-decisions",
        "description": "You are formatting a status indicator for a machine dashboard. If the machine is online, it should show 'Active'. If offline, it should show 'Down'.\n\nYou could write a 5-line `if / else` block, but you want to save space and write it in a single line. The **Ternary Operator (`? :`)** is perfect for exactly two outcomes.\n\nThe system provides `isOnline` (boolean).\n\nCreate a variable named `statusText` and assign it using the Ternary Operator in one single line based on `isOnline`.\n\nExample 1:\nInput: isOnline = true\nOutput: 'Active'\nExplanation:\n  - The syntax is `condition ? truthValue : falseValue`.\n  - Because `isOnline` is true, the left side of the colon is assigned.\n\nExample 2:\nInput: isOnline = false\nOutput: 'Down'\nExplanation:\n  - `isOnline` is false, bypassing the `?` and selecting the value after the `:`.\n\nConstraints:\n- Do NOT declare `isOnline`.\n- You MUST declare and assign `let statusText` on the SAME line.\n- You MUST use the `? :` ternary operator. NO `if`/`else` blocks are allowed.\n\nFollow-up: Why is it advised to avoid chaining multiple ternary operators together?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "let x = true ? 'Yes' : 'No';",
                "output": "'Yes'",
                "explanation": "A heavily condensed if/else statement.",
                "_id": "69baffa5c3a069391bd179ad"
            }
        ],
        "constraints": [
            "Must use the ? and : ternary operators",
            "Do not use normal if statements",
            "Must be heavily condensed format"
        ],
        "hints": [
            "Hint 1: A ternary is structured like a question and two answers: `Is It True ? Yes Result : No Result`",
            "Hint 2: Evaluate isOnline. `isOnline ? 'Active' : 'Down'`",
            "Hint 3: let statusText = isOnline ? 'Active' : 'Down';"
        ],
        "starterCode": "// 'isOnline' is provided.\n// Create 'statusText' using a ternary operator below.\n",
        "testCases": [
            {
                "input": "isOnline=true",
                "expected": "statusText is exactly 'Active'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179ae"
            },
            {
                "input": "isOnline=false",
                "expected": "statusText is exactly 'Down'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179af"
            },
            {
                "input": "AST check",
                "expected": "code uses ConditionalExpression instead of IfStatement",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179b0"
            }
        ],
        "solutionCode": "// Step 1: Write a single line variable assignment binding to a ternary expression.\nlet statusText = isOnline ? 'Active' : 'Down';",
        "tags": [
            "control-flow",
            "ternary",
            "shorthand"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Switch Statements",
        "problemId": 43,
        "slug": "switch-statements",
        "description": "You are writing the input-handler for a retro fighting game controller. Players press 'W', 'A', 'S', or 'D' to move. If they press a huge chain of `if / else if / else if / else if` statements, the code looks ugly and runs slowly.\n\nA **Switch statement** is built specifically for dealing with many exact-match checks against a single variable.\n\nThe system provides `buttonPress` (string e.g., 'W').\nCreate a variable `actionName`.\n\nWrite a `switch(buttonPress)` block to set `actionName`:\n- Case 'W': set `actionName` to 'Jump'.\n- Case 'S': set `actionName` to 'Crouch'.\n- Case 'A': set `actionName` to 'Left'.\n- Case 'D': set `actionName` to 'Right'.\n- Default: set `actionName` to 'Idle'.\n\nExample 1:\nInput: buttonPress = 'S'\nOutput: 'Crouch'\nExplanation:\n  - The switch engine skips directly to the 'S' case.\n  - It executes `actionName = 'Crouch';`.\n  - A `break;` statement stops it from falling into the next cases.\n\nConstraints:\n- Do NOT declare `buttonPress`.\n- You MUST define `let actionName;` first.\n- You MUST use a `switch` block with `case` and `break` lines.\n\nFollow-up: What horrifying bug happens if you forget to write `break;` inside a switch case?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "buttonPress = 'D'",
                "output": "'Right'",
                "explanation": "Switch blocks jump directly to the matched case, acting efficiently on flat values.",
                "_id": "69baffa5c3a069391bd179b2"
            }
        ],
        "constraints": [
            "Must use a switch statement",
            "Must include exactly four cases and a default",
            "Must include break keywords"
        ],
        "hints": [
            "Hint 1: Open the switch: `switch(buttonPress) { ... }`",
            "Hint 2: Use `case 'W': actionName = 'Jump'; break;`",
            "Hint 3: Always put `default: actionName = 'Idle'; break;` at the end."
        ],
        "starterCode": "// 'buttonPress' is provided.\n// Declare 'actionName' and use a switch statement to set it.\n",
        "testCases": [
            {
                "input": "buttonPress='W'",
                "expected": "actionName equals 'Jump'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179b3"
            },
            {
                "input": "buttonPress='Q'",
                "expected": "actionName equals 'Idle' (hit the default case)",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179b4"
            },
            {
                "input": "buttonPress='S'",
                "expected": "actionName equals 'Crouch'",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179b5"
            }
        ],
        "solutionCode": "let actionName;\n// Step 1: Open switch against the variable.\nswitch (buttonPress) {\n  case 'W':\n    actionName = 'Jump';\n    break; // Prevent fallthrough\n  case 'S':\n    actionName = 'Crouch';\n    break;\n  case 'A':\n    actionName = 'Left';\n    break;\n  case 'D':\n    actionName = 'Right';\n    break;\n  default:\n    actionName = 'Idle';\n    break;\n}",
        "tags": [
            "control-flow",
            "switch",
            "patterns"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Switch Fallthrough Behaviors",
        "problemId": 44,
        "slug": "switch-fallthrough-behaviors",
        "description": "Sometimes, the 'horrifying bug' of forgetting a `break` in a `switch` statement is actually exactly what you want! If multiple cases need the exact same outcome, you can stack cases together without breaks, causing them to \"fall through\" into each other.\n\nThe system provides `currentMonth` (a string like `'January'`, `'February'`, etc).\nCreate a variable `seasonName`.\n\nWrite a `switch(currentMonth)` block. Group the months using fallthrough behavior:\n- 'December', 'January', 'February' -> set `seasonName` to 'Winter'\n- 'March', 'April', 'May' -> set `seasonName` to 'Spring'\n- Default for everything else -> set `seasonName` to 'Other'\n\nExample 1:\nInput: currentMonth = 'January'\nOutput: 'Winter'\nExplanation:\n  - The logic matches 'January'. Since there is NO break beneath 'January', execution falls downwards, running the Winter assignment code.\n\nConstraints:\n- Declare `let seasonName;`\n- MUST use a single `switch` block.\n- You MUST use stacked cases (e.g. `case 'December': case 'January': ...`). Do not copy-paste assignments.\n\nFollow-up: Why is switch fallthrough generally discouraged in modern linters unless heavily commented?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "currentMonth = 'February'",
                "output": "'Winter'",
                "explanation": "Exploiting switch structure to execute identical logic on multiple targets.",
                "_id": "69baffa5c3a069391bd179b7"
            }
        ],
        "constraints": [
            "Must use stacked cases",
            "Do not assign Winter three times",
            "Only use one break per logic cluster"
        ],
        "hints": [
            "Hint 1: Just place cases sequentially. `case 'A': case 'B': result = 1; break;`",
            "Hint 2: Note the colons. There is no code between stacked cases.",
            "Hint 3: `switch(currentMonth) { case 'December': case 'January': case 'February': seasonName = 'Winter'; break; ... }`"
        ],
        "starterCode": "// 'currentMonth' is provided.\n// Declare 'seasonName' and use a fallthrough switch block below.\n",
        "testCases": [
            {
                "input": "currentMonth='January'",
                "expected": "seasonName equals 'Winter'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179b8"
            },
            {
                "input": "currentMonth='April'",
                "expected": "seasonName equals 'Spring'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179b9"
            },
            {
                "input": "currentMonth='August'",
                "expected": "seasonName equals 'Other' (hit the default fallback)",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179ba"
            }
        ],
        "solutionCode": "let seasonName;\nswitch (currentMonth) {\n  // Step 1: Stack conditions. If ANY hit, they fall downwards to the execution layer.\n  case 'December':\n  case 'January':\n  case 'February':\n    seasonName = 'Winter';\n    break; // Break before Spring.\n  case 'March':\n  case 'April':\n  case 'May':\n    seasonName = 'Spring';\n    break;\n  default:\n    seasonName = 'Other';\n    break;\n}",
        "tags": [
            "control-flow",
            "switch",
            "fallthrough"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Short-Circuit Guard Clauses",
        "problemId": 45,
        "slug": "short-circuit-guard-clauses",
        "description": "You are building a system that processes bank transfers. Before doing complex math, the system needs to perform sanity checks to prevent crashes. A 'Guard Clause' safely escapes the current execution flow if the environment isn't valid. \n\nHowever, because we aren't using functions yet (no `return`), we can achieve Guard Clauses using Logical AND (`&&`) or simple `if` scoping.\n\nThe system provides `isLoggedIn` (boolean) and `walletBalance` (number).\nCreate a variable `transferSuccess` starting at `false`.\n\nWrite a check: If the user is NOT logged in, we do nothing (it remains false). If they ARE logged in, we evaluate a nested check: if their balance is greater than 0, set `transferSuccess` to `true`.\n\nExample 1:\nInput: isLoggedIn = false, walletBalance = 500\nOutput: false\nExplanation:\n  - The top-level guard sees `false`. It never even checks the wallet balance to reduce processing power.\n\nExample 2:\nInput: isLoggedIn = true, walletBalance = -10\nOutput: false\nExplanation:\n  - Overcame the guard, but the balance fails the logic.\n\nConstraints:\n- Do NOT declare `isLoggedIn` or `walletBalance`.\n- You MUST declare `let transferSuccess = false;`.\n- You MUST only update to `true` inside a nested verification.\n\nFollow-up: How is a true Guard Clause with `return` inside a function much cleaner than nested `if` statements?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "isLoggedIn = true, walletBalance = 100",
                "output": "true",
                "explanation": "Must pass security guard block before attempting logic.",
                "_id": "69baffa5c3a069391bd179bc"
            }
        ],
        "constraints": [
            "Initialize transferSuccess securely to false",
            "Only flag to true inside conditional checks"
        ],
        "hints": [
            "Hint 1: `let transferSuccess = false;`",
            "Hint 2: Open an if. `if (isLoggedIn) { ... }`",
            "Hint 3: Nest the math. `if (walletBalance > 0) { transferSuccess = true; }`"
        ],
        "starterCode": "// 'isLoggedIn' and 'walletBalance' are provided.\n// Declare 'transferSuccess' securely below.\n",
        "testCases": [
            {
                "input": "isLoggedIn=true, walletBalance=50",
                "expected": "transferSuccess is true",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179bd"
            },
            {
                "input": "isLoggedIn=false, walletBalance=9000",
                "expected": "transferSuccess relies on its secure default and remains false",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179be"
            },
            {
                "input": "isLoggedIn=true, walletBalance=0",
                "expected": "transferSuccess remains securely false due to 0 bounds",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179bf"
            }
        ],
        "solutionCode": "// Step 1: Secure default assignment.\nlet transferSuccess = false;\n// Step 2: Outer guard limits execution depth.\nif (isLoggedIn) {\n  // Step 3: Inner logic proceeds now that sandbox is valid.\n  if (walletBalance > 0) {\n    transferSuccess = true;\n  }\n}",
        "tags": [
            "control-flow",
            "guard-clauses",
            "security-patterns"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Strict Type Guarding (Snowball)",
        "problemId": 46,
        "slug": "strict-type-guarding",
        "description": "This challenge combines variables, typeof operators, strict equality, and if-statements into a massive security check.\n\nYour API expects an order quantity to be specifically a Number type. Hackers are trying to crash it by sending Strings (e.g. `'100'`) or null payloads.\n\nThe system provides an unknown variable `payload`.\n\nCreate a variable `isVerified`. \nUsing an `if/else` block, evaluate two strict conditions simultaneously (using `&&`):\n1. The `typeof payload` MUST strictly equal `'number'`.\n2. The `payload` MUST be functionally greater than 0.\n- If both pass, `isVerified` becomes `true`.\n- Else, `isVerified` becomes `false`.\n\nExample 1:\nInput: payload = 5\nOutput: true\nExplanation:\n  - typeof 5 is 'number'. 5 > 0. Both conditions pass.\n\nExample 2:\nInput: payload = '5'\nOutput: false\nExplanation:\n  - typeof '5' is 'string'. Condition 1 fails instantly, throwing it to the `else` block.\n\nConstraints:\n- Do NOT declare `payload`.\n- Declare `let isVerified;`.\n- Use an `if/else` structure.\n- Use `typeof` operator with string equality check.\n\nFollow-up: What quirk makes checking `typeof null` completely useless for security?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Control Flow",
        "topicOrder": 6,
        "examples": [
            {
                "input": "payload = '10'",
                "output": "false",
                "explanation": "Type guards prevent implicit coercion attacks.",
                "_id": "69baffa5c3a069391bd179c1"
            }
        ],
        "constraints": [
            "Must check typeof explicitly",
            "Must check value boundaries",
            "Must use if/else"
        ],
        "hints": [
            "Hint 1: The condition inside the `if` will need two parts joined by `&&`.",
            "Hint 2: Determine if JS sees it as a number: `typeof payload === 'number'`",
            "Hint 3: Verify math boundaries: `payload > 0`"
        ],
        "starterCode": "// 'payload' is magically provided.\n// Create 'isVerified' and guard it below.\n",
        "testCases": [
            {
                "input": "payload=20",
                "expected": "isVerified is true",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179c2"
            },
            {
                "input": "payload='20'",
                "expected": "isVerified is false (malicious string injection)",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179c3"
            },
            {
                "input": "payload=-5",
                "expected": "isVerified is false (failed mathematical bound check)",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179c4"
            }
        ],
        "solutionCode": "let isVerified;\n// Step 1: Use strict type reflection joined securely with a value verification gate.\nif (typeof payload === 'number' && payload > 0) {\n  isVerified = true;\n} else {\n  isVerified = false;\n}",
        "tags": [
            "control-flow",
            "typeof",
            "logical-and",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The Infinite Repetition",
        "problemId": 47,
        "slug": "the-infinite-repetition",
        "description": "Topic 7: Loops unlocked. Until now, your programs executed top-to-bottom precisely once. Loops allow you to replay a block of code over and over automatically!\n\nYou are building a logging tool that needs to record the exact word `'echo'` multiple times onto an existing string.\n\nThe system provides `logText` (an empty string `''`).\n\nCreate a `while` loop that runs exactly 3 times. Each time it loops, use the `+=` operator to glue the string `'echo'` to `logText`. (Do not glue spaces).\n\nExample 1:\nInput: logText = ''\nOutput: 'echoechoecho'\nExplanation:\n  - You initialize a counter variable (e.g., `let iterations = 0`).\n  - You instruct the `while` block to run as long as `iterations < 3`.\n  - Inside the block, you append the text.\n  - Crtically, you increment the counter `iterations++`. If you forget this, the loop never stops!\n\nConstraints:\n- Do NOT declare `logText` (it exists).\n- You MUST create a manual counter using `let`.\n- You MUST use a `while(condition)` loop.\n- You MUST increase the counter inside the loop to avoid infinite loops.\n\nFollow-up: What physically happens to the web browser if you run a `while` loop without incrementing the counter?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "loop structure executing three passes",
                "output": "'echoechoecho'",
                "explanation": "Loops perform highly condensed repetition based on tracking variables.",
                "_id": "69baffa5c3a069391bd179c6"
            }
        ],
        "constraints": [
            "Must use a while loop explicitly",
            "Must track loop iterations mechanically",
            "Must use the += string concatenation operator"
        ],
        "hints": [
            "Hint 1: First, make a temporary counter variable outside the loop. `let count = 0;`",
            "Hint 2: Open the loop checking the boundary. `while(count < 3) { ... }`",
            "Hint 3: Inside, append the text, then crucially, do `count++;`."
        ],
        "starterCode": "// 'logText' is provided as an empty string.\n// Create a while loop below to append 'echo' exactly 3 times.\n",
        "testCases": [
            {
                "input": "logText = ''",
                "expected": "logText equals 'echoechoecho'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179c7"
            },
            {
                "input": "AST check",
                "expected": "code structurally utilizes a WhileStatement node",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179c8"
            },
            {
                "input": "AST loop condition check",
                "expected": "the loop correctly halts itself",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179c9"
            }
        ],
        "solutionCode": "// Step 1: Create a mechanical counter integer.\nlet count = 0;\n// Step 2: Trap the execution flow inside a while construct enforcing a specific mathematical boundary.\nwhile (count < 3) {\n  // Step 3: Run the repetitious work payload.\n  logText += 'echo';\n  // Step 4: Advance the counter to inch closer to terminating the boundary.\n  count++;\n}",
        "tags": [
            "loops",
            "while",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Counting With Style: The For Loop",
        "problemId": 48,
        "slug": "counting-with-style-the-for-loop",
        "description": "Writing three distinct lines to manage a `while` loop (setup, boundary condition, incrementer) is tedious. JavaScript provides the **`for` loop** to condense all three mechanics into a single readable line.\n\nYou are building an algorithm to calculate factorial sums. The system provides an integer variable `totalSum` initialized to `0`.\n\nUse a `for` loop to add every number from `1` through `5` inclusive directly into `totalSum`.\n\nExample 1:\nInput: totalSum = 0\nOutput: 15\nExplanation:\n  - The syntax is `for (let i = 1; i <= 5; i++) { ... }`.\n  - Iteration 1: `totalSum += 1` -> 1\n  - Iteration 2: `totalSum += 2` -> 3\n  - Iteration 3: `totalSum += 3` -> 6...\n  - It finishes at exactly 15.\n\nConstraints:\n- Do NOT declare `totalSum`.\n- You MUST use a `for` loop.\n- Your tracking variable MUST be explicitly scoped using `let i` inside the loop parentheses.\n- The loop must touch `5`.\n\nFollow-up: What error occurs if you try to `console.log(i)` outside of the `for` loop block?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "for(let i = 1; i <= 5; i++) totalSum += i;",
                "output": "15",
                "explanation": "Inline condensed loop tracking.",
                "_id": "69baffa5c3a069391bd179cb"
            }
        ],
        "constraints": [
            "Must use the for(...) construct",
            "Must define index iterator natively within construct boundaries",
            "Must perform cumulative math via +="
        ],
        "hints": [
            "Hint 1: The standard format is `for (intializer; condition; increment) { payload }`",
            "Hint 2: Start `i` at 1. The condition is `i <= 5`. The increment is `i++`.",
            "Hint 3: `for (let i = 1; i <= 5; i++) { totalSum += i; }`"
        ],
        "starterCode": "// 'totalSum' is provided at 0.\n// Execute a 'for' loop accumulating numbers 1 through 5 inclusive.\n",
        "testCases": [
            {
                "input": "totalSum starts at 0",
                "expected": "totalSum is aggressively updated to exactly 15",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179cc"
            },
            {
                "input": "AST check",
                "expected": "code utilizes a ForStatement cleanly encompassing its iterator",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179cd"
            },
            {
                "input": "totalSum starts at 10",
                "expected": "totalSum hits 25 correctly without erasing original values",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179ce"
            }
        ],
        "solutionCode": "// Step 1: Wrap setup, condition, and advancement all tightly via a traditional 'for' wrapper.\n// Step 2: Ensure the boundary goes up to and includes exactly 5 utilizing <=.\nfor (let i = 1; i <= 5; i++) {\n  // Step 3: Run arithmetic accumulation algorithm.\n  totalSum += i;\n}",
        "tags": [
            "loops",
            "for",
            "arithmetic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Reverse Iteration",
        "problemId": 49,
        "slug": "reverse-iteration",
        "description": "Your rocket launch software needs a 3.. 2.. 1 countdown. So far, you have only iterated 'forwards' into positive infinity. Loops can easily run backwards if you configure their controls in reverse!\n\nThe system provides an empty string variable `countdownLog`.\n\nWrite a `for` loop that starts its tracking variable at `3`, counts DOWN until `1` (inclusive), and appends that string character to `countdownLog`.\n\nExample 1:\nInput: countdownLog = ''\nOutput: '321'\nExplanation:\n  - Initializer: `let i = 3`\n  - Boundary: As long as `i >= 1`\n  - Decrementer: We don't advance upwards with `i++`, we shrink downwards utilizing `i--`.\n  - The payload runs three times, grabbing the variables 3, then 2, then 1 implicitly converted to string.\n\nConstraints:\n- Do NOT declare `countdownLog`.\n- You MUST use a `for` loop.\n- You MUST manually iterate backwards using `i--`.\n\nFollow-up: Why is off-by-one boundary checking incredibly dangerous when iterating backwards on Arrays in the future?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "for(i=3; i>=1; i--) log+=i",
                "output": "'321'",
                "explanation": "Loops easily parse mathematically backwards using reverse structural limits.",
                "_id": "69baffa5c3a069391bd179d0"
            }
        ],
        "constraints": [
            "Must use a reverse For construct",
            "Must utilize the decrement i-- operation",
            "Output order must be strictly descending"
        ],
        "hints": [
            "Hint 1: Setup: start at 3. `let i = 3;`",
            "Hint 2: Condition: continue while the number is big. `i >= 1;`",
            "Hint 3: Action: Shrink it. `i--`"
        ],
        "starterCode": "// 'countdownLog' is provided as an empty string.\n// Employ a reverse 'for' loop to generate '321'.\n",
        "testCases": [
            {
                "input": "countdownLog begins ''",
                "expected": "countdownLog is exactly the string '321'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179d1"
            },
            {
                "input": "AST check",
                "expected": "uses a decrement UpdateExpression inside a ForStatement",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179d2"
            },
            {
                "input": "countdownLog begins 'Lift:'",
                "expected": "countdownLog is exactly 'Lift:321'",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179d3"
            }
        ],
        "solutionCode": "// Step 1: Design the mechanics to start high.\n// Step 2: Tell the conditional boundary to only execute logic so long as number persists above 0.\n// Step 3: Actively shrink the tracker using --.\nfor (let i = 3; i >= 1; i--) {\n  countdownLog += i;\n}",
        "tags": [
            "loops",
            "for",
            "decrement",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Skipping Logic With Continue",
        "problemId": 50,
        "slug": "skipping-logic-with-continue",
        "description": "You are processing telemetry data from a sensor that outputs numbers 1 through 5 sequentially. Occasionally, number 3 gets corrupted, so you want the loop to skip processing it.\n\nThe system provides a numeric variable `sensorTotal` set to `0`.\n\nWrite a `for` loop starting at `1` and ending at `5` inclusive. Inside the loop, check if the iterator `i` is strictly equal to `3`. If it is, execute the `continue;` keyword. Otherwise, add `i` to `sensorTotal`.\n\nExample 1:\nInput: sensorTotal = 0\nOutput: 12\nExplanation:\n  - Starts loop. Checks 1. 1 is safe. `sensorTotal += 1` -> 1\n  - Checks 2. 2 is safe. `sensorTotal += 2` -> 3\n  - Checks 3. The `continue;` keyword triggers. The execution abruptly skips the rest of the block and forces the loop back up to the top.\n  - Checks 4. `sensorTotal += 4` -> 7\n  - Checks 5. `sensorTotal += 5` -> 12\n\nConstraints:\n- Do NOT declare `sensorTotal`.\n- You MUST use a `for` loop.\n- You MUST place an `if(i === 3)` check containing the `continue` keyword inside the loop block.\n\nFollow-up: What is the difference between `continue` and `break` inside of a loop?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "loop with internal continue interceptor",
                "output": "12",
                "explanation": "Keyword forcefully short-circuits the current iteration pass.",
                "_id": "69baffa5c3a069391bd179d5"
            }
        ],
        "constraints": [
            "Must implement the continue keyword effectively",
            "Must skip execution strictly only on number 3",
            "Must utilize cumulative math addition"
        ],
        "hints": [
            "Hint 1: Build the outer loop first. `for (let i = 1; i <= 5; i++) { ... }`",
            "Hint 2: As the first embedded logic line, check equality. `if (i === 3) { continue; }`",
            "Hint 3: Any code positioned functionally below a valid continue triggers logic avoidance."
        ],
        "starterCode": "// 'sensorTotal' is provided at 0.\n// Execute a loop with an embedded continue check inside.\n",
        "testCases": [
            {
                "input": "sensorTotal starts at 0",
                "expected": "sensorTotal calculates exclusively to 12 via mathematical absence",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179d6"
            },
            {
                "input": "AST keyword check",
                "expected": "code structure leverages a ContinueStatement",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179d7"
            },
            {
                "input": "sensorTotal starts at -10",
                "expected": "sensorTotal isolates at 2 based on isolated accumulational inputs bypassing 3",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179d8"
            }
        ],
        "solutionCode": "// Step 1: Shell out the normal iteration bounds.\nfor (let i = 1; i <= 5; i++) {\n  // Step 2: Set guard against undesirable payloads.\n  if (i === 3) {\n    // Step 3: Abort this particular micro-pass early.\n    continue;\n  }\n  // Step 4: Normal safe payload operation algorithms.\n  sensorTotal += i;\n}",
        "tags": [
            "loops",
            "control-flow",
            "continue",
            "skip"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Bailing Out With Break",
        "problemId": 51,
        "slug": "bailing-out-with-break",
        "description": "You are writing the search algorithm for an emergency contact system. The system provides a string `contactList` consisting of a sequence of characters, and it needs to find exactly the first `'!'` exclamation mark, representing an emergency flag.\n\nThe system provides `contactList` (e.g., `'abc!def'`).\n\nCreate a variable named `emergencyIndex` set to `-1`.\nWrite a `for` loop that iterates over every character in the string using `contactList.length`. Inside the loop, if the current character `contactList[i]` cleanly equals `'!'`, assign the index `i` to `emergencyIndex`, and immediately terminate the loop using the `break` keyword so it stops searching.\n\nExample 1:\nInput: contactList = 'safesafe!ignored'\nOutput: 8\nExplanation:\n  - The iterator scans index 0, 1, 2...\n  - At index 8, it finds '!'.\n  - It records `emergencyIndex = 8`.\n  - The `break` commands immediately destroys the loop, preventing it from wasting time scanning 'ignored'.\n\nConstraints:\n- Do NOT declare `contactList`.\n- You MUST declare `let emergencyIndex = -1;`.\n- You MUST use a `for` loop.\n- You MUST use the `break;` keyword inside an `if` check.\n\nFollow-up: Why initialize `emergencyIndex` to `-1` instead of `0`?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "loop locates flag and executes break",
                "output": "8",
                "explanation": "Break fundamentally halts iteration cycles to save execution time.",
                "_id": "69baffa5c3a069391bd179da"
            }
        ],
        "constraints": [
            "Must track iterating index i",
            "Must read string characters dynamically",
            "Must trigger break keyword"
        ],
        "hints": [
            "Hint 1: Standard loop: `for (let i = 0; i < contactList.length; i++)`",
            "Hint 2: Read current index: `contactList[i] === '!'`",
            "Hint 3: Save `i` to `emergencyIndex`, then on the very next line, type `break;`."
        ],
        "starterCode": "// 'contactList' is provided.\n// Declare 'emergencyIndex' starting at -1, then run a loop to find '!'.\n",
        "testCases": [
            {
                "input": "contactList = 'hello!there'",
                "expected": "emergencyIndex equals 5",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179db"
            },
            {
                "input": "contactList = 'no_flag_here'",
                "expected": "emergencyIndex remains safely -1",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179dc"
            },
            {
                "input": "contactList = '!!'",
                "expected": "emergencyIndex securely isolates to 0, stopping cleanly against the first",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179dd"
            }
        ],
        "solutionCode": "// Step 1: Default fallback meaning \"Not Found\".\nlet emergencyIndex = -1;\n// Step 2: Traverse string dynamically based off its property length.\nfor (let i = 0; i < contactList.length; i++) {\n  // Step 3: Conditional check specific sequence extraction.\n  if (contactList[i] === '!') {\n    // Step 4: Record discovery matrix.\n    emergencyIndex = i;\n    // Step 5: Stop searching completely.\n    break;\n  }\n}",
        "tags": [
            "loops",
            "for",
            "break",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Do-While: Post-Condition Checking",
        "problemId": 52,
        "slug": "do-while-post-condition",
        "description": "Standard loops evaluate their condition BEFORE running the code blocks. Sometimes you need a block to execute *at least once*, even if the condition is already false.\n\nThe system provides `securityAttempts` (a number, sometimes already starting dangerously high).\n\nCreate a variable `logMessage` set to `''`.\nUse a `do...while` loop structure.\n- Inside the `do` block: Append the word `'attempt '` to `logMessage`. Then increment `securityAttempts++`.\n- For the `while` condition: Run so long as `securityAttempts < 3`.\n\nExample 1:\nInput: securityAttempts = 5\nOutput: 'attempt '\nExplanation:\n  - Even though 5 is NOT less than 3, the `do` block executes unconditionally the very first time.\n  - `logMessage` gets `'attempt '`.\n  - The condition is finally checked at the literal bottom of the loop: `(6 < 3)`. It computes false, thus refusing to loop again.\n\nConstraints:\n- Do NOT declare `securityAttempts`.\n- You MUST declare `let logMessage = '';`.\n- You MUST use the `do { ... } while(condition);` syntax.\n\nFollow-up: What are practical world scenarios for running standard code blindly before validation?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "do { log+='test' } while (false);",
                "output": "'test'",
                "explanation": "Payload fires immediately prior to logic constraints.",
                "_id": "69baffa5c3a069391bd179df"
            }
        ],
        "constraints": [
            "Must implement explicit Do constructor",
            "Must implement While boundary structurally beneath payload",
            "Must track loop advancement internally"
        ],
        "hints": [
            "Hint 1: Structurally: `do { ... } while (condition);`",
            "Hint 2: Put `logMessage += 'attempt '` and `securityAttempts++` inside the do block.",
            "Hint 3: `while (securityAttempts < 3);`"
        ],
        "starterCode": "// 'securityAttempts' is provided.\n// Build a do-while logging mechanism below.\n",
        "testCases": [
            {
                "input": "securityAttempts starts at 0",
                "expected": "logMessage strings out 'attempt attempt attempt '",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179e0"
            },
            {
                "input": "securityAttempts starts at 99",
                "expected": "logMessage executes blindly once returning 'attempt '",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179e1"
            },
            {
                "input": "AST keyword structural check",
                "expected": "uses a DoWhileStatement node",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179e2"
            }
        ],
        "solutionCode": "let logMessage = '';\n// Step 1: Open isolated payload structure.\ndo {\n  logMessage += 'attempt ';\n  // Step 2: Track modification matrix inside.\n  securityAttempts++;\n// Step 3: Implement bottom-heavy condition verification string.\n} while (securityAttempts < 3);",
        "tags": [
            "loops",
            "do-while",
            "control-flow"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Grid Coordination Matrix",
        "problemId": 53,
        "slug": "grid-coordination-matrix",
        "description": "You are generating the coordinates for a simple 3x3 grid (like Tic-Tac-Toe). Doing this manually takes 9 lines of code. Using 'nested loops' — a loop inside another loop — takes just a few lines!\n\nThe system provides `coordinateMap`, initialized to an empty string `''`.\n\nYou must generate exactly this text: `0,0|0,1|0,2|1,0|1,1|1,2|2,0|2,1|2,2|`.\n\nTo do this:\n1. Create an outer `for` loop with iterator `x` from 0 up to (but not including) 3.\n2. Inside it, create an inner `for` loop with iterator `y` from 0 up to (but not including) 3.\n3. Inside the inner loop, append to `coordinateMap`: `${x},${y}|`.\n\nExample 1:\nInput: N/A\nOutput: '0,0|0,1|0,2|1,0|...' \nExplanation:\n  - `x = 0`. Inner loop runs entirely: `y = 0`, `y = 1`, `y = 2`.\n  - Then the outer loop advances to `x = 1`. Inner loop runs entirely again.\n\nConstraints:\n- Do NOT declare `coordinateMap`.\n- You MUST manually nest one `for` constructor inside another.\n- Iterators MUST use distinct separate names (`x` and `y` or `i` and `j`).\n\nFollow-up: What happens if your inner loop attempts to use the exact same iterator name `i` as the outer loop?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "nested 'y' loop within 'x' loop",
                "output": "'0,0|0,1|0,2...'",
                "explanation": "Hierarchical logic execution compounds looping outputs organically.",
                "_id": "69baffa5c3a069391bd179e4"
            }
        ],
        "constraints": [
            "Must implement two distinct For statements",
            "Outer scope contains inner construct",
            "Must output exactly correctly templated string payload"
        ],
        "hints": [
            "Hint 1: Outer: `for (let x = 0; x < 3; x++) { ... }`",
            "Hint 2: Inner: `for (let y = 0; y < 3; y++) { ... }`",
            "Hint 3: Inside the inner loop, concatenate: `coordinateMap += x + ',' + y + '|';` or use template literals."
        ],
        "starterCode": "// 'coordinateMap' string provided.\n// Generate the 3x3 grid coordinates internally.\n",
        "testCases": [
            {
                "input": "coordinateMap begins ''",
                "expected": "coordinateMap produces exactly '0,0|0,1|0,2|1,0|1,1|1,2|2,0|2,1|2,2|'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179e5"
            },
            {
                "input": "AST iteration parsing structure limits",
                "expected": "structural syntax executes nested block architecture",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179e6"
            }
        ],
        "solutionCode": "// Step 1: Open global row loop.\nfor (let x = 0; x < 3; x++) {\n  // Step 2: Execute horizontal pass iteration for each row step sequentially.\n  for (let y = 0; y < 3; y++) {\n    // Step 3: Combine active metrics into a singular tracking layout utilizing backticks for sanity.\n    coordinateMap += `${x},${y}|`;\n  }\n}",
        "tags": [
            "loops",
            "nested",
            "for",
            "matrices"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Vocal Parsing (Snowball)",
        "problemId": 54,
        "slug": "string-vocal-parsing",
        "description": "This is a snowball challenge combining strings, loops, and conditional if-statements.\nYou are writing linguistics text-scanner logic. You need to count exactly how many times the letter `'a'` or `'e'` appears within a given string.\n\nThe system provides `documentText` (e.g. `'apple tree'`).\n\nCreate a tracking integer `vowelCount` initialized to `0`.\nWrite a loop to scan every character of `documentText`.\nInside the loop, check if the character is strictly `'a'` or strictly `'e'`. If it is either, increase `vowelCount` by exactly 1.\n\nExample 1:\nInput: documentText = 'baker'\nOutput: 2\nExplanation:\n  - Scans 'b' -> false.\n  - Scans 'a' -> true! (`vowelCount` = 1)\n  - Scans 'k' -> false.\n  - Scans 'e' -> true! (`vowelCount` = 2)\n  - Scans 'r' -> false.\n\nConstraints:\n- Do NOT declare `documentText`.\n- You MUST create `let vowelCount = 0;`.\n- Use `documentText[i]` (index bracket notation) or `documentText.charAt(i)` to isolate characters linearly during iteration.\n- Condition MUST evaluate both 'a' and 'e'.\n\nFollow-up: How would you easily alter this snippet to be entirely case-insensitive (catching 'A' and 'E') prior to loops?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "loop tracking 'apple'",
                "output": "2",
                "explanation": "Iterates structurally counting explicit matches against logical configurations.",
                "_id": "69baffa5c3a069391bd179e8"
            }
        ],
        "constraints": [
            "Must implement string index iterating within limits manually",
            "Must check for both 'a' and 'e' utilizing '||'",
            "Track totals into global integers dynamically"
        ],
        "hints": [
            "Hint 1: Loop bounds: `for(let i=0; i<documentText.length; i++)`",
            "Hint 2: Target character inside loop: `let char = documentText[i];`",
            "Hint 3: Evaluation logic: `if (char === 'a' || char === 'e') { vowelCount++; }`"
        ],
        "starterCode": "// 'documentText' is provided.\n// Create 'vowelCount'. Scan the string. Tally 'a' and 'e'.\n",
        "testCases": [
            {
                "input": "documentText='cake bake'",
                "expected": "vowelCount outputs exactly 3 matches",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179e9"
            },
            {
                "input": "documentText='xyz!'",
                "expected": "vowelCount remains robustly 0 without incident",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179ea"
            },
            {
                "input": "documentText='A E i o u a'",
                "expected": "vowelCount processes directly to 1 due to case-sensitivity restrictions inherent in simple checks",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179eb"
            }
        ],
        "solutionCode": "let vowelCount = 0;\n// Step 1: Exploit loop systems to scan string boundaries dynamically.\nfor (let i = 0; i < documentText.length; i++) {\n  // Step 2: Use OR (||) checking to evaluate specific truth sets against single characters.\n  if (documentText[i] === 'a' || documentText[i] === 'e') {\n    vowelCount++;\n  }\n}",
        "tags": [
            "loops",
            "strings",
            "logical-or",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Topic 7 Grand Review",
        "problemId": 55,
        "slug": "topic-7-grand-review",
        "description": "This is the final challenge before unlocking Functions. Prove you master variable scoping, logic routing, mathematical tracking, and string concatenation looping.\n\nThe system provides `targetWord` (e.g. `'go'`).\nCreate a variable `chant` initialized to `''`.\n\nWrite a loop that runs exactly `3` times. In each loop, if it is the VERY LAST iteration (e.g. `i === 2`, since counting starts at 0), append the `targetWord` followed by `'!'`.\nOtherwise, append the `targetWord` followed by `'.. '`.\n\nExample 1:\nInput: targetWord = 'go'\nOutput: 'go.. go.. go!'\nExplanation:\n  - Loop 0: `i` is 0, which isn't the last pass. Appends 'go.. '.\n  - Loop 1: `i` is 1. Appends 'go.. '.\n  - Loop 2: `i` is 2. This IS the last pass. Logic alters route, appending 'go!'.\n\nConstraints:\n- Do NOT declare `targetWord`.\n- Implement `for` loop executing safely 3 times (0, 1, 2).\n- Implement internal `if/else` evaluating the state of `i`.\n\nFollow-up: This is the end of linear execution! Can you deduce why repeating large looping logic over and over in apps demands 'Functions'?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "target='hey' loop tracking 3 passes",
                "output": "'hey.. hey.. hey!'",
                "explanation": "Iterative processing combined cleanly with conditional branching logic.",
                "_id": "69baffa5c3a069391bd179ed"
            }
        ],
        "constraints": [
            "Must implement linear loop count",
            "Must implement internal conditional bounds",
            "Must assemble syntax strings flawlessly"
        ],
        "hints": [
            "Hint 1: Loop structurally: `for(let i = 0; i < 3; i++)`",
            "Hint 2: Inside, ask: `if (i === 2)` (which means the 3rd and final execution).",
            "Hint 3: `chant += targetWord + '!';` against `chant += targetWord + '.. ';`"
        ],
        "starterCode": "// 'targetWord' is provided.\n// Create 'chant' utilizing looping conditional logic below.\n",
        "testCases": [
            {
                "input": "targetWord='fight'",
                "expected": "chant resolves to exactly 'fight.. fight.. fight!'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179ee"
            },
            {
                "input": "targetWord='A'",
                "expected": "chant resolves to exactly 'A.. A.. A!'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179ef"
            },
            {
                "input": "Loop variable check",
                "expected": "loop variables securely contained inside execution environment structures",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179f0"
            }
        ],
        "solutionCode": "let chant = '';\n// Step 1: Open loop 3 iterations deep securely.\nfor (let i = 0; i < 3; i++) {\n  // Step 2: Form logic branch targeting the exact final iteration.\n  if (i === 2) {\n    chant += targetWord + '!';\n  } else {\n    // Step 3: Default behavior payload.\n    chant += targetWord + '.. ';\n  }\n}",
        "tags": [
            "loops",
            "strings",
            "control-flow",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Welcome to Functions",
        "problemId": 56,
        "slug": "welcome-to-functions",
        "description": "Topic 8: Functions unlocked. Welcome to standard LeetCode behavior!\n\nYou no longer blindly initialize `let variables` floating in the global space. Starting with this challenge, ALL logic must be executed safely inside of a secure, scoped Function. Your logic must `return` output directly to the game engine.\n\nYou are writing the initialization script for the application. Write the logic INSIDE the pre-declared `bootSystem` function body.\n\nYour task is to simply `return` the exact string `'System Online'` out of the function.\n\nExample 1:\nInput: bootSystem()\nOutput: 'System Online'\nExplanation:\n  - The testing engine executes your isolated function.\n  - The keyword `return` immediately halts internal function execution and ejects the payload value back to the caller.\n\nConstraints:\n- You MUST write your logic between the curly braces `{ ... }` of the given `function`.\n- You MUST use the `return` keyword.\n- Do NOT change the function's name.\n\nFollow-up: What value does your function automatically return if you forget to type the `return` keyword at all?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "function x() { return 'A'; }",
                "output": "'A'",
                "explanation": "Executes logic block and actively ejects resulting values.",
                "_id": "69baffa5c3a069391bd179f2"
            }
        ],
        "constraints": [
            "Must utilize return keyword exclusively inside prebuilt shell",
            "Do not rename the function structure",
            "Must eject accurate string spelling"
        ],
        "hints": [
            "Hint 1: Do not declare variables outside the function.",
            "Hint 2: Inside the brackets, simply type `return 'System Online';`.",
            "Hint 3: That's it! Functions are encapsulated boxes of logic."
        ],
        "starterCode": "function bootSystem() {\n    // Write your return statement below this line\n    \n}",
        "testCases": [
            {
                "input": "engine invokes bootSystem() safely",
                "expected": "the result of the payload call is exactly the string 'System Online'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179f3"
            },
            {
                "input": "AST structural inspection sequence",
                "expected": "code structure leverages a ReturnStatement inside of a FunctionDeclaration",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179f4"
            }
        ],
        "solutionCode": "function bootSystem() {\n  // Step 1: Execute immediate exit returning the specific data payload.\n  return 'System Online';\n}",
        "tags": [
            "functions",
            "return",
            "basics"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Passing Parameters",
        "problemId": 57,
        "slug": "passing-parameters",
        "description": "Functions become incredibly powerful when you feed data directly into them. These input variables are known as 'Parameters' (or 'Arguments').\n\nYou are writing an engine calculation determining area.\nThe function `calculateArea` has been created for you, but it needs to accept data. It expects to receive two numbers as parameters: `length` and `width`.\n\nInside the function, multiply the two parameters together, and instantly `return` the product.\n\nExample 1:\nInput: execute calculateArea(5, 10)\nOutput: 50\nExplanation:\n  - The engine feeds the numbers into the parenthetical parameters.\n  - Parameter `length` structurally holds 5.\n  - Parameter `width` structurally holds 10.\n  - Your logic mathematically evaluates `5 * 10`, then safely attempts `return 50;`.\n\nConstraints:\n- Do NOT change the function name `calculateArea`.\n- You MUST define parameters `length` and `width` inside the parentheses `()`.\n- You MUST `return` the math result.\n\nFollow-up: Can function parameters conflict with other variables outside in the global environment?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "function xyz(x, y) { return x + y; } executed as xyz(1, 2)",
                "output": "3",
                "explanation": "Parameters act as placeholder variables defined dynamically by invocation.",
                "_id": "69baffa5c3a069391bd179f6"
            }
        ],
        "constraints": [
            "Must correctly formulate parameter structures",
            "Must implement multiplication arithmetic sequentially",
            "Must aggressively return result natively"
        ],
        "hints": [
            "Hint 1: First, fix the function definition: `function calculateArea(length, width) {`",
            "Hint 2: Inside, multiply them: `length * width`",
            "Hint 3: Put the `return` keyword in front of the math: `return length * width;`"
        ],
        "starterCode": "function calculateArea() {\n    // Add parameters above, then write your logic here\n    \n}",
        "testCases": [
            {
                "input": "invoke calculateArea(4, 5)",
                "expected": "ejects numerically 20 natively",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179f7"
            },
            {
                "input": "invoke calculateArea(10, 10)",
                "expected": "ejects numerically 100",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179f8"
            },
            {
                "input": "invoke calculateArea(-5, 5)",
                "expected": "resolves completely to -25 without arithmetic crashing",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179f9"
            }
        ],
        "solutionCode": "// Step 1: Assign placeholder variables linearly inside parenthesis.\nfunction calculateArea(length, width) {\n  // Step 2: Utilize placeholder data securely isolated away from global.\n  return length * width;\n}",
        "tags": [
            "functions",
            "parameters",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Default Parameter Logic",
        "problemId": 58,
        "slug": "default-parameter-logic",
        "description": "Sometimes a system calls a function but forgets to securely feed it data. To prevent your internal math from violently crashing against `undefined` parameters, modern Javascript allows setting 'Default' backups directly inside the parentheses.\n\nYou are writing the profile configuration for a social media app. The function `setBio` accepts a parameter called `userText`.\n\nHowever, you must defensively set the parameter so that if `userText` is completely empty/undefined, it automatically defaults to the string `'No bio provided'`. Finally, return the resulting parameter.\n\nExample 1:\nInput: execute setBio('Learning to code!')\nOutput: 'Learning to code!'\nExplanation:\n  - The engine aggressively fed custom text safely into the parameter slot. The backup default was cleanly bypassed.\n\nExample 2:\nInput: execute setBio()\nOutput: 'No bio provided'\nExplanation:\n  - The engine executed cleanly without data. The default structurally activated mitigating the `undefined` error.\n\nConstraints:\n- Do NOT overwrite parameter natively inside the function body.\n- You MUST assign the default fallback value directly within the `()` parameter space.\n\nFollow-up: Do default parameters trigger if you deliberately invoke the function using `null` data?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "function xyz(color = 'blue') { return color; } executed as xyz()",
                "output": "'blue'",
                "explanation": "Default definitions safely guard undefined bounds gracefully.",
                "_id": "69baffa5c3a069391bd179fb"
            }
        ],
        "constraints": [
            "Must implement parameter defaults purely structurally",
            "Must return assigned internal mechanism safely",
            "Do not manually assign variable conditionally if/else internally"
        ],
        "hints": [
            "Hint 1: Definition format structurally: `function name(slot = 'Fallback') { ... }`",
            "Hint 2: Formulate the prompt securely inside: `function setBio(userText = 'No bio provided') {`",
            "Hint 3: Simply `return userText;` inside! The engine handles the logical defaults for you automatically."
        ],
        "starterCode": "function setBio() {\n    // Setup the default parameter inside (), then return it.\n    \n}",
        "testCases": [
            {
                "input": "invoke setBio('Custom text')",
                "expected": "the result bypasses defaults tracking solely exactly 'Custom text'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179fc"
            },
            {
                "input": "invoke setBio() with no arguments",
                "expected": "the function evaluates to purely 'No bio provided'",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd179fd"
            },
            {
                "input": "AST signature boundaries",
                "expected": "assignment operator specifically situated structurally inside the parameters matrix securely",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd179fe"
            }
        ],
        "solutionCode": "// Step 1: Assign equals directly mathematically onto the placeholder variable initializing the secure default mechanism.\nfunction setBio(userText = 'No bio provided') {\n  // Step 2: Return natively.\n  return userText;\n}",
        "tags": [
            "functions",
            "parameters",
            "default-values"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The Arrow Function Syntax",
        "problemId": 59,
        "slug": "the-arrow-function-syntax",
        "description": "Modern JavaScript extensively relies upon 'Arrow Functions'. They strip out the heavy legacy syntax, allowing developers to craft tiny logic engines securely tied to constants.\n\nYou have been provided with an old-fashioned function called `doubleNumber`. You must rewrite it dynamically right inside the editor into a heavily abbreviated Arrow Function assigned to a `const` variable.\n\nThe logic requires taking a parameter `num` and heavily returning it meticulously multiplied by 2.\n\nExample 1:\nInput: execute doubleNumber(5)\nOutput: 10\nExplanation:\n  - `const doubleNumber = (num) => { return num * 2; };`\n\nConstraints:\n- You MUST completely delete the legacy `function doubleNumber` keyword structure.\n- You MUST declare it natively as `const doubleNumber`.\n- You MUST leverage the native `=>` arrow constructor explicitly assigning logic to the constant securely.\n\nFollow-up: Can arrow functions entirely skip the `return` keyword and curly braces if only utilizing a single logic line?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "const hello = (name) => { return `Hi ${name}`; }",
                "output": "Variable securely housing heavily executable execution boundary.",
                "explanation": "Modernizing legacy patterns.",
                "_id": "69baffa5c3a069391bd17a00"
            }
        ],
        "constraints": [
            "Must implement const initialization",
            "Must structure Arrow Syntax natively (=>)",
            "Must multiply precisely by 2"
        ],
        "hints": [
            "Hint 1: Remove `function doubleNumber` completely.",
            "Hint 2: Start new line: `const doubleNumber = (num) => {`",
            "Hint 3: Include the exact math: `return num * 2; }`"
        ],
        "starterCode": "function doubleNumber() {\n    // Delete this structure and rewrite entirely utilizing arrow syntax mechanics.\n}",
        "testCases": [
            {
                "input": "invoke doubleNumber(4)",
                "expected": "evaluates correctly multiplying sequentially exactly 8",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17a01"
            },
            {
                "input": "AST structural extraction analysis",
                "expected": "engine heavily confirms ArrowFunctionExpression actively utilized completely omitting legacy mechanisms",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17a02"
            },
            {
                "input": "invoke doubleNumber(0)",
                "expected": "calculates securely aggressively evaluating explicitly 0",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17a03"
            }
        ],
        "solutionCode": "// Step 1: Declare immutable variable securely.\n// Step 2: Assemble native parameter block strictly immediately linked utilizing arrow mechanics structurally.\nconst doubleNumber = (num) => {\n  // Step 3: Math explicitly runs functionally executing ejection patterns aggressively.\n  return num * 2;\n};",
        "tags": [
            "functions",
            "arrow-functions",
            "es6"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Implicit Return Mechanics (Snowball)",
        "problemId": 60,
        "slug": "implicit-return-mechanics",
        "description": "Arrow functions have one final trick. If you omit the curly braces `{}` and the `return` keyword mechanically, whatever math logic happens structurally defaults natively to immediately forcefully returning itself out seamlessly. This is called 'Implicit Return'.\n\nYou need a lightning-fast utility evaluating whether data is structurally valid via equality operators. \n\nCreate a `const` named `isPositive` as a heavily stripped arrow function.\nIt must take exactly manually one parameter dynamically called `value`.\nIt must contain NO `{}` braces and NO `return` syntax explicitly. It must merely natively verify whether `value > 0` directly after the structural arrow syntax line heavily checking logic bounds dynamically.\n\nExample 1:\nInput: execute isPositive(10)\nOutput: true\nExplanation:\n  - `const isPositive = value => value > 0;`\n  - It implicitly ejects the truth boolean without any heavy scaffolding securely dynamically evaluating math bounds.\n\nConstraints:\n- MUST be identically `const isPositive` mechanically initialized.\n- MUST utilize purely Arrow syntaxes natively.\n- MUST totally omit curly brackets `{ }` and the `return` keyword explicitly.\n\nFollow-up: How do you handle structurally wrapping objects via Implicit returns effectively bypassing native scoping limits?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "const add = (a, b) => a + b;",
                "output": "Variable housing perfectly abridged payload mechanisms seamlessly executed seamlessly natively heavily structurally bound without limits.",
                "explanation": "Stripping heavily legacy structural blocks forcefully limits line usage dynamically.",
                "_id": "69baffa5c3a069391bd17a05"
            }
        ],
        "constraints": [
            "Must implement heavily abbreviated implicit structure flawlessly",
            "Must logically bounds check actively explicitly avoiding return usage structurally seamlessly seamlessly",
            "No internal braces securely."
        ],
        "hints": [
            "Hint 1: Just `const isPositive = (value) => ...`",
            "Hint 2: Do not use `{}` whatsoever. Do not type `return`.",
            "Hint 3: Simply type the logic natively immediately mathematically: `const isPositive = (value) => value > 0;`"
        ],
        "starterCode": "// Declare heavily streamlined const 'isPositive' utility natively below completely explicitly structurally securely.\n",
        "testCases": [
            {
                "input": "invoke dynamically strictly isPositive(5)",
                "expected": "ejects boolean evaluated heavily flawlessly exactly true",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17a06"
            },
            {
                "input": "invoke isPositive(-1)",
                "expected": "ejects deeply natively boolean seamlessly falsely dynamically securely flawlessly",
                "isHidden": false,
                "_id": "69baffa5c3a069391bd17a07"
            },
            {
                "input": "AST extraction limitations securely evaluated actively globally limits bounds",
                "expected": "structurally rigorously confirms explicitly purely zero presence actively limits regarding ReturnStatement or BlockStatement aggressively explicitly dynamically",
                "isHidden": true,
                "_id": "69baffa5c3a069391bd17a08"
            }
        ],
        "solutionCode": "// Step 1: Initialize arrow function stripping parentheses if singularly targeting strictly dynamically one aggressively seamless payload explicitly manually dynamically securely tightly.\n// Step 2: Implement immediate mathematical checking safely natively explicitly actively.\nconst isPositive = value => value > 0;",
        "tags": [
            "functions",
            "arrow-functions",
            "es6",
            "implicit-return",
            "snowball"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Prime Number Search (Break)",
        "problemId": 61,
        "slug": "prime-number-search-break",
        "description": "Topic 7: Advanced Loops. You are building a security scanner that looks for 'Prime' numbers. A Prime number is only divisible by 1 and itself.\n\nThe system provides a variable `num` (e.g., `7`). Your job is to determine if it is Prime.\n\nCreate a boolean variable `isPrime` set to `true`.\nWrite a `for` loop starting from `2` up to (but not including) `num`.\nInside the loop, if `num % i === 0` (meaning it's divisible by another number), set `isPrime` to `false` and `break` out of the loop immediately.\n\nExample 1:\nInput: num = 7\nOutput: true\nExplanation:\n  - 7 is not divisible by 2, 3, 4, 5, or 6.\n\nExample 2:\nInput: num = 4\nOutput: false\nExplanation:\n  - 4 % 2 is 0. `isPrime` becomes false. `break` stops the loop.\n\nConstraints:\n- Do NOT declare `num`.\n- You MUST use a `for` loop starting at 2.\n- You MUST use the `break` keyword.\n\nFollow-up: Why start at 2? Why not start at 0 or 1?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "num = 9",
                "output": "false",
                "explanation": "Factors like 3 are found, terminating the search early.",
                "_id": "69bb05bb72070c07e832831d"
            }
        ],
        "constraints": [
            "Must use the break keyword",
            "Must check for divisibility using %"
        ],
        "hints": [
            "Hint 1: `for (let i = 2; i < num; i++)`",
            "Hint 2: Inside: `if (num % i === 0) { isPrime = false; break; }`"
        ],
        "starterCode": "// 'num' is provided.\n// Check if 'num' is prime below.\n",
        "testCases": [
            {
                "input": "num = 11",
                "expected": "isPrime is true",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832831e"
            },
            {
                "input": "num = 15",
                "expected": "isPrime is false",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832831f"
            }
        ],
        "solutionCode": "let isPrime = true;\nif (num <= 1) isPrime = false;\nfor (let i = 2; i < num; i++) {\n  if (num % i === 0) {\n    isPrime = false;\n    break;\n  }\n}",
        "tags": [
            "loops",
            "break",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Summing Even Numbers",
        "problemId": 62,
        "slug": "summing-even-numbers",
        "description": "Combine loops and logic. You need to sum only the EVEN numbers from 1 to a given `maxRange`.\n\nThe system provides `maxRange` (e.g., `10`). Create a variable `sumEvens` set to `0`.\n\nWrite a `for` loop starting at 1. If the current number `i` is even (`i % 2 === 0`), use `+=` to add it to `sumEvens`. Else, use `continue` to jump to the next iteration.\n\nExample 1:\nInput: maxRange = 6\nOutput: 12 (2 + 4 + 6)\n\nConstraints:\n- Do NOT declare `maxRange`.\n- Use `continue` keyword inside the loop.\n\nFollow-up: Could this be solved without `continue` using a simple `if` block?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "maxRange = 10",
                "output": "30",
                "explanation": "2+4+6+8+10 = 30.",
                "_id": "69bb05bb72070c07e8328321"
            }
        ],
        "constraints": [
            "Must use continue keyword",
            "Must sum ONLY evens"
        ],
        "hints": [
            "Hint 1: `if (i % 2 !== 0) { continue; }`",
            "Hint 2: Then `sumEvens += i;`"
        ],
        "starterCode": "// 'maxRange' is provided.\n// Sum even numbers below.\n",
        "testCases": [
            {
                "input": "maxRange = 4",
                "expected": "sumEvens is 6",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328322"
            },
            {
                "input": "maxRange = 5",
                "expected": "sumEvens is 6",
                "isHidden": true,
                "_id": "69bb05bb72070c07e8328323"
            }
        ],
        "solutionCode": "let sumEvens = 0;\nfor (let i = 1; i <= maxRange; i++) {\n  if (i % 2 !== 0) continue;\n  sumEvens += i;\n}",
        "tags": [
            "loops",
            "continue",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Finding Max in String Digits",
        "problemId": 63,
        "slug": "finding-max-string-digits",
        "description": "Strings can be iterated like arrays. You are given `digitString = '4825'`. You need to find the largest single digit.\n\nCreate a variable `maxDigit` set to `0` (as a number).\nWrite a loop to check each character. Convert the character to a `Number` and if it is larger than `maxDigit`, update it.\n\nExample 1:\nInput: '391'\nOutput: 9\n\nConstraints:\n- Do NOT redeclare `digitString`.\n- Use `Number()` built-in function.\n\nFollow-up: Why initialize `maxDigit` to 0 instead of -1?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "digitString = '123'",
                "output": "3",
                "explanation": "Comparing each digit individually.",
                "_id": "69bb05bb72070c07e8328325"
            }
        ],
        "constraints": [
            "Must use a loop to traverse digits",
            "Must update max value dynamically"
        ],
        "hints": [
            "Hint 1: `for (let i = 0; i < digitString.length; i++)`",
            "Hint 2: `let n = Number(digitString[i]);`",
            "Hint 3: `if (n > maxDigit) { maxDigit = n; }`"
        ],
        "starterCode": "// 'digitString' is provided.\n// Find the maximum digit below.\n",
        "testCases": [
            {
                "input": "digitString = '9582'",
                "expected": "maxDigit is 9",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328326"
            },
            {
                "input": "digitString = '007'",
                "expected": "maxDigit is 7",
                "isHidden": true,
                "_id": "69bb05bb72070c07e8328327"
            }
        ],
        "solutionCode": "let maxDigit = 0;\nfor (let i = 0; i < digitString.length; i++) {\n  let n = Number(digitString[i]);\n  if (n > maxDigit) {\n    maxDigit = n;\n  }\n}",
        "tags": [
            "loops",
            "strings",
            "comparison"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Multiplication Table Column",
        "problemId": 64,
        "slug": "multiplication-table-column",
        "description": "Generate a column of a multiplication table for a specific number.\n\nThe system provides `baseNum = 5`. Create an empty string `tableStr`.\n\nUsing a loop from 1 to 5 inclusive, append `${baseNum}x${i}=${baseNum * i}|` to `tableStr`.\n\nExample 1:\nInput: 5\nOutput: '5x1=5|5x2=10|5x3=15|5x4=20|5x5=25|'\n\nConstraints:\n- Use template literals with backticks.\n- Use a for loop.\n\nFollow-up: How would you change this to use a `while` loop?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "baseNum = 2",
                "output": "'2x1=2|2x2=4|2x3=6|2x4=8|2x5=10|'",
                "explanation": "Building a structured map of products.",
                "_id": "69bb05bb72070c07e8328329"
            }
        ],
        "constraints": [
            "Must use template literals",
            "Loop must run exactly 5 times"
        ],
        "hints": [
            "Hint 1: `tableStr += `${baseNum}x${i}=${baseNum * i}|`;`"
        ],
        "starterCode": "// 'baseNum' is provided.\n// Generate table string below.\n",
        "testCases": [
            {
                "input": "baseNum = 3",
                "expected": "tableStr is '3x1=3|3x2=6|3x3=9|3x4=12|3x5=15|'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832832a"
            }
        ],
        "solutionCode": "let tableStr = '';\nfor (let i = 1; i <= 5; i++) {\n  tableStr += `${baseNum}x${i}=${baseNum * i}|`;\n}",
        "tags": [
            "loops",
            "strings",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Nested Triangle Builder",
        "problemId": 65,
        "slug": "nested-triangle-builder",
        "description": "Use nested loops to create a numerical pattern.\n\nGenerate the string `triangleData`: `1|12|123|`.\n\nTo do this:\n1. Outer for loop `i` from 1 to 3.\n2. Inner for loop `j` from 1 to `i`.\n3. Add `j` to `triangleData`.\n4. After the inner loop finishes but still inside the outer loop, add `|`.\n\nExample 1:\nInput: N/A\nOutput: '1|12|123|'\n\nConstraints:\n- Use two nested `for` loops.\n- Initialize `triangleData` as an empty string.\n\nFollow-up: What would the string look like if you swapped `i` and `j` in the inner loop condition?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Loops",
        "topicOrder": 7,
        "examples": [
            {
                "input": "N/A",
                "output": "'1|12|123|'",
                "explanation": "Building a tiered structure using nested iteration.",
                "_id": "69bb05bb72070c07e832832c"
            }
        ],
        "constraints": [
            "Must use nested for loops",
            "Correct formatting with | separator"
        ],
        "hints": [
            "Hint 1: Outer loop logic: `for (let i = 1; i <= 3; i++)`",
            "Hint 2: Inner loop logic: `for (let j = 1; j <= i; j++)`"
        ],
        "starterCode": "// Build 'triangleData' below.\n",
        "testCases": [
            {
                "input": "N/A",
                "expected": "triangleData is '1|12|123|'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832832d"
            }
        ],
        "solutionCode": "let triangleData = '';\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= i; j++) {\n    triangleData += j;\n  }\n  triangleData += '|';\n}",
        "tags": [
            "loops",
            "nested",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Basic Greeting Function",
        "problemId": 66,
        "slug": "basic-greeting-function",
        "description": "Topic 8: Functions Deep Dive. Create a function named `sayHello` that returns the string `'Hello World'`.\n\nFunctions allow you to reuse code and give it a name.\n\nExample 1:\nInput: sayHello()\nOutput: 'Hello World'\n\nConstraints:\n- Must name the function `sayHello`.\n- Must use the `return` keyword.\n\nFollow-up: What's the difference between `console.log` and `return` inside a function?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "sayHello()",
                "output": "'Hello World'",
                "explanation": "A simple function returning a fixed string.",
                "_id": "69bb05bb72070c07e832832f"
            }
        ],
        "constraints": [
            "Function name sayHello",
            "Use return"
        ],
        "hints": [
            "Hint 1: `function sayHello() { return '...'; }`"
        ],
        "starterCode": "// Define sayHello function below.\n",
        "testCases": [
            {
                "input": "sayHello()",
                "expected": "returns 'Hello World'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328330"
            }
        ],
        "solutionCode": "function sayHello() {\n  return 'Hello World';\n}",
        "tags": [
            "functions",
            "basics"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Square a Number",
        "problemId": 67,
        "slug": "square-a-number",
        "description": "Create a function `square` that takes one parameter `n` and returns `n * n`.\n\nParameters are like variables that get their values when the function is called.\n\nExample 1:\nInput: square(5)\nOutput: 25\n\nConstraints:\n- Function name: `square`.\n- Parameter name: `n`.\n\nFollow-up: What happens if you call `square('5')`? Why?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "square(4)",
                "output": "16",
                "explanation": "Multiplying the input by itself.",
                "_id": "69bb05bb72070c07e8328332"
            }
        ],
        "constraints": [
            "Must take one parameter",
            "Must return squared value"
        ],
        "hints": [
            "Hint 1: `function square(n) { ... }`"
        ],
        "starterCode": "// Define square function below.\n",
        "testCases": [
            {
                "input": "square(10)",
                "expected": "returns 100",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328333"
            },
            {
                "input": "square(-3)",
                "expected": "returns 9",
                "isHidden": true,
                "_id": "69bb05bb72070c07e8328334"
            }
        ],
        "solutionCode": "function square(n) {\n  return n * n;\n}",
        "tags": [
            "functions",
            "math",
            "parameters"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Sum of Two Numbers",
        "problemId": 68,
        "slug": "sum-of-two-numbers",
        "description": "Create a function `add` that takes two parameters `a` and `b` and returns their sum.\n\nExample 1:\nInput: add(10, 20)\nOutput: 30\n\nConstraints:\n- Function name: `add`.\n- Use two parameters.\n\nFollow-up: How many parameters can a function take in JavaScript?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "add(5, 5)",
                "output": "10",
                "explanation": "Returning the result of addition.",
                "_id": "69bb05bb72070c07e8328336"
            }
        ],
        "constraints": [
            "Must take two parameters",
            "Must use return"
        ],
        "hints": [
            "Hint 1: `function add(a, b) { return a + b; }`"
        ],
        "starterCode": "// Define add function below.\n",
        "testCases": [
            {
                "input": "add(100, 200)",
                "expected": "returns 300",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328337"
            }
        ],
        "solutionCode": "function add(a, b) {\n  return a + b;\n}",
        "tags": [
            "functions",
            "math",
            "parameters"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Absolute Value Function",
        "problemId": 69,
        "slug": "absolute-value-function",
        "description": "Create a function `absolute` that takes a number `num`. If `num` is negative, return `-num`. Otherwise, return `num`.\n\nThis is like the `Math.abs()` function.\n\nExample 1:\nInput: absolute(-5)\nOutput: 5\n\nExample 2:\nInput: absolute(10)\nOutput: 10\n\nConstraints:\n- Function name: `absolute`.\n- Use an `if/else` block inside.\n\nFollow-up: Why return `-num` for negative numbers?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "absolute(-12)",
                "output": "12",
                "explanation": "Stripping the negative sign via conditional logic.",
                "_id": "69bb05bb72070c07e8328339"
            }
        ],
        "constraints": [
            "Must handle negative inputs",
            "Must handle positive inputs"
        ],
        "hints": [
            "Hint 1: `if (num < 0) { return -num; }`"
        ],
        "starterCode": "// Define absolute function below.\n",
        "testCases": [
            {
                "input": "absolute(-100)",
                "expected": "returns 100",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832833a"
            },
            {
                "input": "absolute(0)",
                "expected": "returns 0",
                "isHidden": true,
                "_id": "69bb05bb72070c07e832833b"
            }
        ],
        "solutionCode": "function absolute(num) {\n  if (num < 0) {\n    return -num;\n  } else {\n    return num;\n  }\n}",
        "tags": [
            "functions",
            "logic",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check if Even",
        "problemId": 70,
        "slug": "check-if-even-function",
        "description": "Create a function `isEven` that takes a number `n`. Return `true` if `n` is even, and `false` if it is odd.\n\nExample 1:\nInput: isEven(4)\nOutput: true\n\nExample 2:\nInput: isEven(7)\nOutput: false\n\nConstraints:\n- Function name: `isEven`.\n- Use the modulo operator `%`.\n\nFollow-up: Can you write this function in just one line using an implicit return arrow function?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "isEven(10)",
                "output": "true",
                "explanation": "10 is divisible by 2 with no remainder.",
                "_id": "69bb05bb72070c07e832833d"
            }
        ],
        "constraints": [
            "Must return a boolean",
            "Must check for divisibility"
        ],
        "hints": [
            "Hint 1: `return n % 2 === 0;`"
        ],
        "starterCode": "// Define isEven function below.\n",
        "testCases": [
            {
                "input": "isEven(44)",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832833e"
            },
            {
                "input": "isEven(1)",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb05bb72070c07e832833f"
            }
        ],
        "solutionCode": "function isEven(n) {\n  return n % 2 === 0;\n}",
        "tags": [
            "functions",
            "logic",
            "modulo"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Function Scope Isolation",
        "problemId": 71,
        "slug": "function-scope-isolation",
        "description": "Variables declared INSIDE a function cannot be seen from the outside. This is called 'Function Scope'.\n\nCreate a function called `secretFunction`. Inside it, declare `let secret = 'shhh'`. Return the `secret` variable.\n\nOutside the function, in the global space, create a variable `canISeeIt` and assign it the string `'no'` (because you can't access `secret` from here).\n\nExample 1:\nInput: execute secretFunction()\nOutput: 'shhh'\n\nConstraints:\n- Function name: `secretFunction`.\n- Variable name outside: `canISeeIt`.\n\nFollow-up: What happens if you try to `console.log(secret)` outside the function?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "N/A",
                "output": "'no'",
                "explanation": "Variables are trapped inside the function boundaries.",
                "_id": "69bb05bb72070c07e8328341"
            }
        ],
        "constraints": [
            "Must use internal let declaration",
            "Must return internal variable"
        ],
        "hints": [
            "Hint 1: `function secretFunction() { let secret = 'shhh'; return secret; }`",
            "Hint 2: `let canISeeIt = 'no';`"
        ],
        "starterCode": "// Define function and global variable below.\n",
        "testCases": [
            {
                "input": "secretFunction()",
                "expected": "returns 'shhh'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328342"
            },
            {
                "input": "global variable check",
                "expected": "canISeeIt equals 'no'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328343"
            }
        ],
        "solutionCode": "function secretFunction() {\n  let secret = 'shhh';\n  return secret;\n}\nlet canISeeIt = 'no';",
        "tags": [
            "functions",
            "scope",
            "isolation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Global vs Local Scope",
        "problemId": 72,
        "slug": "global-vs-local-scope",
        "description": "If a variable is declared OUTSIDE a function, the function CAN see it. This is 'Global Scope'.\n\nThe system provides a global variable `globalName = 'Shiv'`. \n\nCreate a function `getGlobalName` that returns the value of `globalName` WITHOUT declaring any new variables inside.\n\nExample 1:\nInput: getGlobalName()\nOutput: 'Shiv'\n\nConstraints:\n- Do NOT declare `globalName`.\n- Must use the variable from the global scope.\n\nFollow-up: Why is using too many global variables considered 'bad practice' in large apps?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "N/A",
                "output": "'Shiv'",
                "explanation": "Functions reach outward to find variables not present in their local scope.",
                "_id": "69bb05bb72070c07e8328345"
            }
        ],
        "constraints": [
            "Must access external variables",
            "Do not use internal let/const"
        ],
        "hints": [
            "Hint 1: `function getGlobalName() { return globalName; }`"
        ],
        "starterCode": "// 'globalName' is already declared.\n// Define getGlobalName function below.\n",
        "testCases": [
            {
                "input": "getGlobalName()",
                "expected": "returns the value of globalName",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328346"
            }
        ],
        "solutionCode": "function getGlobalName() {\n  return globalName;\n}",
        "tags": [
            "functions",
            "scope",
            "global"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Variable Shadowing",
        "problemId": 73,
        "slug": "variable-shadowing",
        "description": "What if you have a global variable AND a local variable with the exact same name? The local one 'shadows' (hides) the global one inside the function.\n\nThe system provides `val = 10` globally.\n\nCreate a function `shadowTest`. Inside it, declare a NEW variable also named `val` and set it to `20`. Return this local `val`.\n\nExample 1:\nInput: shadowTest()\nOutput: 20\n\nConstraints:\n- Function name: `shadowTest`.\n- Must declare `let val = 20` inside.\n\nFollow-up: Does the global `val` change to 20? (Hint: No! Only the local one exists inside the function).",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "shadowTest()",
                "output": "20",
                "explanation": "The local scope takes precedence over the global scope.",
                "_id": "69bb05bb72070c07e8328348"
            }
        ],
        "constraints": [
            "Must use identical naming",
            "Must return local value"
        ],
        "hints": [
            "Hint 1: `let val = 10; function shadowTest() { let val = 20; return val; }`"
        ],
        "starterCode": "// 'val' is declared as 10 globally.\n// Define shadowTest function below.\n",
        "testCases": [
            {
                "input": "shadowTest()",
                "expected": "returns 20",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328349"
            }
        ],
        "solutionCode": "function shadowTest() {\n  let val = 20;\n  return val;\n}",
        "tags": [
            "functions",
            "scope",
            "shadowing"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Function as a Variable",
        "problemId": 74,
        "slug": "function-as-a-variable",
        "description": "In JavaScript, functions are 'First-Class Citizens'. This means you can store a function inside a variable!\n\nCreate a variable `const addFive` and assign it an anonymous function (a function without a name) that takes a parameter `n` and returns `n + 5`.\n\nExample 1:\nInput: addFive(10)\nOutput: 15\n\nConstraints:\n- Use `const addFive = function(n) { ... };` syntax.\n- Return `n + 5`.\n\nFollow-up: Why use `const` instead of `let` when storing functions in variables?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "addFive(2)",
                "output": "7",
                "explanation": "Function expressions allow treated logic like any other data type.",
                "_id": "69bb05bb72070c07e832834b"
            }
        ],
        "constraints": [
            "Must use function expression syntax",
            "Must use const"
        ],
        "hints": [
            "Hint 1: `const myFunc = function() { ... };`"
        ],
        "starterCode": "// Store anonymous function in addFive below.\n",
        "testCases": [
            {
                "input": "addFive(100)",
                "expected": "returns 105",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832834c"
            }
        ],
        "solutionCode": "const addFive = function(n) {\n  return n + 5;\n};",
        "tags": [
            "functions",
            "expressions",
            "anonymous"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Calculate Perimeter",
        "problemId": 75,
        "slug": "calculate-perimeter-function",
        "description": "Create a function `perimeter` that takes `width` and `height`. Return the sum of all four sides (`2 * (width + height)`).\n\nExample 1:\nInput: perimeter(5, 10)\nOutput: 30\n\nConstraints:\n- Function name: `perimeter`.\n- Use two parameters.\n\nFollow-up: Can you use previously defined `add` or `multiply` functions inside this one?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "perimeter(4, 4)",
                "output": "16",
                "explanation": "Calculating the outer boundary of a rectangle.",
                "_id": "69bb05bb72070c07e832834e"
            }
        ],
        "constraints": [
            "Correct mathematical formula",
            "Use return"
        ],
        "hints": [
            "Hint 1: `return 2 * (width + height);`"
        ],
        "starterCode": "// Define perimeter function below.\n",
        "testCases": [
            {
                "input": "perimeter(10, 50)",
                "expected": "returns 120",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832834f"
            }
        ],
        "solutionCode": "function perimeter(width, height) {\n  return 2 * (width + height);\n}",
        "tags": [
            "functions",
            "math",
            "geometry"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Temperature Converter",
        "problemId": 76,
        "slug": "temperature-converter-function",
        "description": "Create a function `toCelsius` that takes `fahrenheit`. Return the temperature in Celsius using the formula: `(fahrenheit - 32) * (5 / 9)`.\n\nExample 1:\nInput: toCelsius(32)\nOutput: 0\n\nExample 2:\nInput: toCelsius(212)\nOutput: 100\n\nConstraints:\n- Function name: `toCelsius`.\n- Return the result of the math.\n\nFollow-up: Why are parentheses important in this specific math formula?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "toCelsius(68)",
                "output": "20",
                "explanation": "Converting thermal units via standardized arithmetic.",
                "_id": "69bb05bb72070c07e8328351"
            }
        ],
        "constraints": [
            "Must implement correct formula",
            "Return numerical result"
        ],
        "hints": [
            "Hint 1: `return (fahrenheit - 32) * (5/9);`"
        ],
        "starterCode": "// Define toCelsius function below.\n",
        "testCases": [
            {
                "input": "toCelsius(77)",
                "expected": "returns 25",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328352"
            }
        ],
        "solutionCode": "function toCelsius(fahrenheit) {\n  return (fahrenheit - 32) * (5 / 9);\n}",
        "tags": [
            "functions",
            "math",
            "science"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "String Reverser (Loop intro)",
        "problemId": 77,
        "slug": "string-reverser-function",
        "description": "Combine functions and loops. Create a function `reverseString` that takes a string `str`.\n\n1. Create an empty string `result = ''` inside.\n2. Use a `for` loop to iterate character by character BACKWARDS.\n3. Add each character to `result`.\n4. Return `result`.\n\nExample 1:\nInput: reverseString('cat')\nOutput: 'tac'\n\nConstraints:\n- Use a for loop.\n- Do NOT use the built-in `.reverse()` method.\n\nFollow-up: How would you use a `while` loop to do the same thing?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "reverseString('hello')",
                "output": "'olleh'",
                "explanation": "Building a string by reading another one in reverse order.",
                "_id": "69bb05bb72070c07e8328354"
            }
        ],
        "constraints": [
            "Must use a manual loop",
            "Must return correctly reversed text"
        ],
        "hints": [
            "Hint 1: `for (let i = str.length - 1; i >= 0; i--)`"
        ],
        "starterCode": "// Define reverseString function below.\n",
        "testCases": [
            {
                "input": "reverseString('js')",
                "expected": "returns 'sj'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328355"
            },
            {
                "input": "reverseString('')",
                "expected": "returns ''",
                "isHidden": true,
                "_id": "69bb05bb72070c07e8328356"
            }
        ],
        "solutionCode": "function reverseString(str) {\n  let result = '';\n  for (let i = str.length - 1; i >= 0; i--) {\n    result += str[i];\n  }\n  return result;\n}",
        "tags": [
            "functions",
            "loops",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Factorial Calculator",
        "problemId": 78,
        "slug": "factorial-calculator-function",
        "description": "The factorial of a number (n!) is the product of all positive integers up to n. (e.g., 4! is 4 * 3 * 2 * 1).\n\nCreate a function `factorial` that takes `n`. Return the factorial sum using a loop.\n\nExample 1:\nInput: factorial(4)\nOutput: 24\n\nConstraints:\n- Function name: `factorial`.\n- Use a for loop.\n\nFollow-up: What is the factorial of 0? (Hint: It's 1!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "factorial(5)",
                "output": "120",
                "explanation": "Calculating cumulative product scale.",
                "_id": "69bb05bb72070c07e8328358"
            }
        ],
        "constraints": [
            "Must implement correct factorial math",
            "Return numerical result"
        ],
        "hints": [
            "Hint 1: `let result = 1; for (let i = 1; i <= n; i++) { result *= i; }`"
        ],
        "starterCode": "// Define factorial function below.\n",
        "testCases": [
            {
                "input": "factorial(3)",
                "expected": "returns 6",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328359"
            },
            {
                "input": "factorial(1)",
                "expected": "returns 1",
                "isHidden": true,
                "_id": "69bb05bb72070c07e832835a"
            }
        ],
        "solutionCode": "function factorial(n) {\n  let result = 1;\n  for (let i = 1; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}",
        "tags": [
            "functions",
            "loops",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Count Vowels in Function",
        "problemId": 79,
        "slug": "count-vowels-function",
        "description": "Create a function `countVowels` that takes a string `text`. Count how many times 'a', 'e', 'i', 'o', or 'u' appear and return the count.\n\nExample 1:\nInput: countVowels('hello')\nOutput: 2 ('e', 'o')\n\nConstraints:\n- Function name: `countVowels`.\n- Must check for all 5 vowels.\n\nFollow-up: Can you make this function case-insensitive using `.toLowerCase()`?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "countVowels('apple')",
                "output": "2",
                "explanation": "Scanning string and incrementing tally on specific matches.",
                "_id": "69bb05bb72070c07e832835c"
            }
        ],
        "constraints": [
            "Must track total tally",
            "Must check all 5 vowel types"
        ],
        "hints": [
            "Hint 1: `if ('aeiou'.includes(char)) { count++; }`"
        ],
        "starterCode": "// Define countVowels function below.\n",
        "testCases": [
            {
                "input": "countVowels('xyz')",
                "expected": "returns 0",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832835d"
            },
            {
                "input": "countVowels('education')",
                "expected": "returns 5",
                "isHidden": true,
                "_id": "69bb05bb72070c07e832835e"
            }
        ],
        "solutionCode": "function countVowels(text) {\n  let count = 0;\n  let vowels = 'aeiou';\n  for (let i = 0; i < text.length; i++) {\n    if (vowels.includes(text[i])) {\n      count++;\n    }\n  }\n  return count;\n}",
        "tags": [
            "functions",
            "loops",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Validator: Strong Password",
        "problemId": 80,
        "slug": "validator-strong-password",
        "description": "Create a function `isStrong` that takes `password` (string). Return `true` if its length is GREATER THAN or EQUAL TO 8, and it contains the character `'!'`. Otherwise return `false`.\n\nExample 1:\nInput: 'pass123!'\nOutput: true\n\nExample 2:\nInput: 'short!'\nOutput: false\n\nConstraints:\n- Must check both length AND character existence.\n\nFollow-up: Why is using a simple length check not enough for security?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "'verylongpassword'",
                "output": "false",
                "explanation": "Fails the character existence check.",
                "_id": "69bb05bb72070c07e8328360"
            }
        ],
        "constraints": [
            "Multi-level logical verification",
            "Return boolean"
        ],
        "hints": [
            "Hint 1: `return password.length >= 8 && password.includes('!');`"
        ],
        "starterCode": "// Define isStrong function below.\n",
        "testCases": [
            {
                "input": "isStrong('12345678!')",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328361"
            },
            {
                "input": "isStrong('pass')",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb05bb72070c07e8328362"
            }
        ],
        "solutionCode": "function isStrong(password) {\n  return password.length >= 8 && password.includes('!');\n}",
        "tags": [
            "functions",
            "strings",
            "security"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Create an Array",
        "problemId": 81,
        "slug": "create-an-array",
        "description": "Topic 9: Arrays Introduction. An array is a list of items stored in a single variable. Use square brackets `[]` to create one.\n\nCreate a variable named `fruits` and assign it an array containing the three strings: `'apple'`, `'banana'`, and `'cherry'`.\n\nExample 1:\nInput: N/A\nOutput: ['apple', 'banana', 'cherry']\n\nConstraints:\n- Variable name: `fruits`.\n- Must contain exactly 3 strings.\n\nFollow-up: Why are arrays better than creating separate variables like `fruit1`, `fruit2`, etc.?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "N/A",
                "output": "['apple', 'banana', 'cherry']",
                "explanation": "Grouping related data into a sequenced collection.",
                "_id": "69bb05bb72070c07e8328364"
            }
        ],
        "constraints": [
            "Must use array literal syntax",
            "Correct string values"
        ],
        "hints": [
            "Hint 1: `let list = ['a', 'b'];`"
        ],
        "starterCode": "// Create your array below.\n",
        "testCases": [
            {
                "input": "fruits.length",
                "expected": "is 3",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328365"
            },
            {
                "input": "fruits[1]",
                "expected": "is 'banana'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328366"
            }
        ],
        "solutionCode": "let fruits = ['apple', 'banana', 'cherry'];",
        "tags": [
            "arrays",
            "basics"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Access First and Last",
        "problemId": 82,
        "slug": "access-first-and-last",
        "description": "Like strings, arrays are zero-indexed. The first item is at `[0]`. The last item is at `[length - 1]`.\n\nThe system provides an array `colors = ['red', 'green', 'blue']`.\n\nCreate a variable `firstColor` and assign it the first item.\nCreate a variable `lastColor` and assign it the last item using the `.length` property.\n\nExample 1:\nInput: colors = ['a', 'b', 'c']\nOutput: firstColor = 'a', lastColor = 'c'\n\nConstraints:\n- Must use `colors.length - 1` for the last item.\n\nFollow-up: What happens if you try to access `colors[5]` on an array with only 3 items?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "['x', 'y', 'z']",
                "output": "'x', 'z'",
                "explanation": "Indexing allows direct retrieval of items from any position.",
                "_id": "69bb05bb72070c07e8328368"
            }
        ],
        "constraints": [
            "Must use dynamic length for the last item",
            "Correct variable naming"
        ],
        "hints": [
            "Hint 1: `let last = arr[arr.length - 1];`"
        ],
        "starterCode": "// 'colors' is provided.\n// Access items below.\n",
        "testCases": [
            {
                "input": "firstColor value",
                "expected": "is 'red'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328369"
            },
            {
                "input": "lastColor value",
                "expected": "is 'blue'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832836a"
            }
        ],
        "solutionCode": "let firstColor = colors[0];\nlet lastColor = colors[colors.length - 1];",
        "tags": [
            "arrays",
            "indexing"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Modify an Item",
        "problemId": 83,
        "slug": "modify-an-item",
        "description": "Unlike strings, arrays ARE mutable. This means you can change an item directly.\n\nThe system provides `nums = [1, 2, 10, 4]`. \n\nCorrect the mistake by changing the item at index `2` from `10` to `3`.\n\nExample 1:\nInput: nums = [1, 2, 10, 4]\nOutput: [1, 2, 3, 4]\n\nConstraints:\n- Do NOT redeclare `nums`.\n- Use `nums[2] = 3;` syntax.\n\nFollow-up: Can you change the length of an array manually by setting `nums.length = 0;`? (Hint: Yes, it empties the array!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "[1, 2, 10, 4]",
                "output": "[1, 2, 3, 4]",
                "explanation": "Updating specific indices within the list.",
                "_id": "69bb05bb72070c07e832836c"
            }
        ],
        "constraints": [
            "Must modify the original array reference",
            "Correct index target"
        ],
        "hints": [
            "Hint 1: `array[index] = newValue;`"
        ],
        "starterCode": "// 'nums' is provided.\n// Modify index 2 below.\n",
        "testCases": [
            {
                "input": "nums[2]",
                "expected": "is 3",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832836d"
            }
        ],
        "solutionCode": "nums[2] = 3;",
        "tags": [
            "arrays",
            "mutation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Push and Pop",
        "problemId": 84,
        "slug": "push-and-pop",
        "description": "Use `.push()` to add an item to the END of an array, and `.pop()` to remove the very last item.\n\nThe system provides `stack = [1, 2]`. \n\n1. Use `.push()` to add the number `3` to the end.\n2. Use `.pop()` to remove the last item and store it in a variable named `removedItem`.\n\nExample 1:\nInput: [1, 2]\nOutput: stack is [1, 2], removedItem is 3\n\nConstraints:\n- Must use both methods.\n- Final state of `stack` should be `[1, 2]`.\n\nFollow-up: What does `.push()` return? (Hint: The new length of the array!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "[1, 2]",
                "output": "[1, 2], 3",
                "explanation": "Managing entries at the trailing edge of the list.",
                "_id": "69bb05bb72070c07e832836f"
            }
        ],
        "constraints": [
            "Must execute push then pop",
            "Store popped value correctly"
        ],
        "hints": [
            "Hint 1: `stack.push(3);`",
            "Hint 2: `let removedItem = stack.pop();`"
        ],
        "starterCode": "// 'stack' is provided.\n// Push and Pop below.\n",
        "testCases": [
            {
                "input": "stack value",
                "expected": "is [1, 2]",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328370"
            },
            {
                "input": "removedItem value",
                "expected": "is 3",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328371"
            }
        ],
        "solutionCode": "stack.push(3);\nlet removedItem = stack.pop();",
        "tags": [
            "arrays",
            "methods",
            "push-pop"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Shift and Unshift",
        "problemId": 85,
        "slug": "shift-and-unshift",
        "description": "Like push/pop but for the BEGINNING of the array. `.unshift()` adds to the start, `.shift()` removes from the start.\n\nThe system provides `queue = [2, 3]`. \n\n1. Use `.unshift()` to add `1` to the front.\n2. Use `.shift()` on the next line and store the result in `firstVal`.\n\nExample 1:\nInput: [2, 3]\nOutput: queue is [2, 3], firstVal is 1\n\nConstraints:\n- Must modify the front of the array.\n\nFollow-up: Why is `.shift()` slower than `.pop()` for very large arrays? (Hint: Every other item has to move over!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "[2, 3]",
                "output": "[2, 3], 1",
                "explanation": "Managing entries at the leading edge of the list.",
                "_id": "69bb05bb72070c07e8328373"
            }
        ],
        "constraints": [
            "Must execute unshift then shift",
            "Store shifted value correctly"
        ],
        "hints": [
            "Hint 1: `queue.unshift(1);` then `let firstVal = queue.shift();`"
        ],
        "starterCode": "// 'queue' is provided.\n// Unshift and Shift below.\n",
        "testCases": [
            {
                "input": "queue value",
                "expected": "is [2, 3]",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328374"
            },
            {
                "input": "firstVal value",
                "expected": "is 1",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328375"
            }
        ],
        "solutionCode": "queue.unshift(1);\nlet firstVal = queue.shift();",
        "tags": [
            "arrays",
            "methods",
            "shift-unshift"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Topic 10: Create an Object",
        "problemId": 86,
        "slug": "create-an-object",
        "description": "Objects store data in Key:Value pairs. Think of them like a mini-database for one item.\n\nCreate a variable named `user` and assign it an object with three properties:\n- `name`: 'Shiv'\n- `age`: 22\n- `isAdmin`: true\n\nExample 1:\nInput: N/A\nOutput: { name: 'Shiv', age: 22, isAdmin: true }\n\nConstraints:\n- Variable name: `user`.\n- Keys must be exactly as named above.\n\nFollow-up: How is an object different from an array? (Hint: Unordered vs Ordered data).",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "N/A",
                "output": "{ name: 'Shiv', age: 22, isAdmin: true }",
                "explanation": "Grouping distinct attributes of an entity.",
                "_id": "69bb05bb72070c07e8328377"
            }
        ],
        "constraints": [
            "Must use curly brace syntax",
            "All 3 properties required"
        ],
        "hints": [
            "Hint 1: `let obj = { key: 'value', num: 5 };`"
        ],
        "starterCode": "// Create your user object below.\n",
        "testCases": [
            {
                "input": "user.name",
                "expected": "is 'Shiv'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328378"
            },
            {
                "input": "user.age",
                "expected": "is 22",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328379"
            }
        ],
        "solutionCode": "let user = {\n  name: 'Shiv',\n  age: 22,\n  isAdmin: true\n};",
        "tags": [
            "objects",
            "basics"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Dot vs Bracket Notation",
        "problemId": 87,
        "slug": "dot-vs-bracket-notation",
        "description": "You can access object values using `.` (dot) or `['']` (brackets).\n\nThe system provides `car = { brand: 'Tesla', model: '3' }`.\n\nCreate a variable `carBrand` and access the brand using DOT notation.\nCreate a variable `carModel` and access the model using BRACKET notation.\n\nExample 1:\nInput: { a: 1 }\nOutput: carBrand='Tesla', carModel='3'\n\nConstraints:\n- Must use both access methods.\n\nFollow-up: When MUST you use brackets instead of dot? (Hint: When the key name has a space or is stored in a variable!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "N/A",
                "output": "'Tesla', '3'",
                "explanation": "Accessing properties via property-access syntax.",
                "_id": "69bb05bb72070c07e832837b"
            }
        ],
        "constraints": [
            "Use both . and []",
            "Correct variable naming"
        ],
        "hints": [
            "Hint 1: `let b = car.brand;`",
            "Hint 2: `let m = car['model'];`"
        ],
        "starterCode": "// 'car' is provided.\n// Access properties below.\n",
        "testCases": [
            {
                "input": "carBrand value",
                "expected": "is 'Tesla'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832837c"
            },
            {
                "input": "carModel value",
                "expected": "is '3'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e832837d"
            }
        ],
        "solutionCode": "let carBrand = car.brand;\nlet carModel = car['model'];",
        "tags": [
            "objects",
            "access"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Adding and Updating",
        "problemId": 88,
        "slug": "adding-and-updating-object",
        "description": "You can add new properties or update old ones at any time.\n\nThe system provides `profile = { username: 'ansh' }`.\n\n1. Update the `username` to `'shiv'`. \n2. Add a new property `score` and set it to `100`.\n\nExample 1:\nInput: { username: 'ansh' }\nOutput: { username: 'shiv', score: 100 }\n\nConstraints:\n- Do NOT redeclare `profile`.\n\nFollow-up: What happens if you try to add a property that already exists? (Hint: It just overwrites it!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "N/A",
                "output": "{ username: 'shiv', score: 100 }",
                "explanation": "Dynamically extending or modifying object keys.",
                "_id": "69bb05bb72070c07e832837f"
            }
        ],
        "constraints": [
            "Correct update syntax",
            "Correct property addition"
        ],
        "hints": [
            "Hint 1: `profile.username = 'new';`",
            "Hint 2: `profile.score = 100;`"
        ],
        "starterCode": "// 'profile' is provided.\n// Update and Add below.\n",
        "testCases": [
            {
                "input": "profile.username",
                "expected": "is 'shiv'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328380"
            },
            {
                "input": "profile.score",
                "expected": "is 100",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328381"
            }
        ],
        "solutionCode": "profile.username = 'shiv';\nprofile.score = 100;",
        "tags": [
            "objects",
            "mutation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The delete Operator",
        "problemId": 89,
        "slug": "the-delete-operator",
        "description": "The `delete` keyword removes a property from an object entirely.\n\nThe system provides `data = { id: 1, temp: 'secret' }`.\n\nRemove the `temp` property from the `data` object.\n\nExample 1:\nInput: { id: 1, temp: 'secret' }\nOutput: { id: 1 }\n\nConstraints:\n- Use the `delete` keyword.\n\nFollow-up: Does `delete` return anything? (Hint: It returns `true` if successful!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "N/A",
                "output": "{ id: 1 }",
                "explanation": "Purging keys from an object hash map.",
                "_id": "69bb05bb72070c07e8328383"
            }
        ],
        "constraints": [
            "Must use delete keyword",
            "Correct property target"
        ],
        "hints": [
            "Hint 1: `delete data.temp;`"
        ],
        "starterCode": "// 'data' is provided.\n// Delete 'temp' below.\n",
        "testCases": [
            {
                "input": "data.temp",
                "expected": "is undefined",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328384"
            },
            {
                "input": "data.id",
                "expected": "is 1",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328385"
            }
        ],
        "solutionCode": "delete data.temp;",
        "tags": [
            "objects",
            "delete"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Nested Objects",
        "problemId": 90,
        "slug": "nested-objects",
        "description": "An object can have ANOTHER object inside it as a value!\n\nCreate a variable `school` with this structure:\n- `name`: 'High School'\n- `address`: an object containing `city: 'Delhi'` and `zip: 110001`.\n\nExample 1:\nInput: N/A\nOutput: { name: 'High School', address: { city: 'Delhi', zip: 110001 } }\n\nConstraints:\n- Use sub-object for address.\n\nFollow-up: How would you access the `city`? (Hint: `school.address.city`)!",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "N/A",
                "output": "{ name: 'High School', address: { city: 'Delhi', zip: 110001 } }",
                "explanation": "Creating hierarchy within data structures.",
                "_id": "69bb05bb72070c07e8328387"
            }
        ],
        "constraints": [
            "Must use nested object literal",
            "Correct values"
        ],
        "hints": [
            "Hint 1: `let school = { name: '...', address: { ... } };`"
        ],
        "starterCode": "// Create your nested school object below.\n",
        "testCases": [
            {
                "input": "school.address.city",
                "expected": "is 'Delhi'",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328388"
            },
            {
                "input": "school.address.zip",
                "expected": "is 110001",
                "isHidden": false,
                "_id": "69bb05bb72070c07e8328389"
            }
        ],
        "solutionCode": "let school = {\n  name: 'High School',\n  address: {\n    city: 'Delhi',\n    zip: 110001\n  }\n};",
        "tags": [
            "objects",
            "nested"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Double the Numbers",
        "problemId": 91,
        "slug": "double-the-numbers-map",
        "description": "Topic 9: Array Methods. The `.map()` method creates a NEW array by applying a function to every item in the original array.\n\nCreate a function `doubleNumbers` that takes an array of numbers `arr`. Use the `.map()` method to return a new array where every number is doubled.\n\nExample 1:\nInput: [1, 2, 3]\nOutput: [2, 4, 6]\n\nConstraints:\n- Must use the `.map()` method.\n- Function name: `doubleNumbers`.\n\nFollow-up: Does `.map()` modify the original array? (Hint: No, it returns a brand new one!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "doubleNumbers([5, 10])",
                "output": "[10, 20]",
                "explanation": "Every element is multiplied by 2 via iteration.",
                "_id": "69bb072f5ea5b49d8ff03d31"
            }
        ],
        "constraints": [
            "Must use .map()",
            "Function must return the new array"
        ],
        "hints": [
            "Hint 1: `return arr.map(num => num * 2);`"
        ],
        "starterCode": "function doubleNumbers(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "doubleNumbers([1, 2, 3])",
                "expected": "returns [2, 4, 6]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d32"
            },
            {
                "input": "doubleNumbers([])",
                "expected": "returns []",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d33"
            }
        ],
        "solutionCode": "function doubleNumbers(arr) {\n  return arr.map(n => n * 2);\n}",
        "tags": [
            "arrays",
            "map",
            "iteration"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Filter Adults Only",
        "problemId": 92,
        "slug": "filter-adults-only",
        "description": "The `.filter()` method creates a NEW array containing only the items that pass a specific test (truthy).\n\nCreate a function `getAdults` that takes an array of ages `ages`. Use `.filter()` to return only the ages that are `18` or older.\n\nExample 1:\nInput: [12, 18, 25, 10]\nOutput: [18, 25]\n\nConstraints:\n- Must use `.filter()`.\n- Function name: `getAdults`.\n\nFollow-up: What happens if NO items pass the filter? (Hint: It returns an empty array `[]`!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "getAdults([15, 20, 30])",
                "output": "[20, 30]",
                "explanation": "Values less than 18 are discarded.",
                "_id": "69bb072f5ea5b49d8ff03d35"
            }
        ],
        "constraints": [
            "Must use .filter()",
            "Correct comparison logic"
        ],
        "hints": [
            "Hint 1: `return ages.filter(age => age >= 18);`"
        ],
        "starterCode": "function getAdults(ages) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getAdults([10, 20, 15, 30])",
                "expected": "returns [20, 30]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d36"
            }
        ],
        "solutionCode": "function getAdults(ages) {\n  return ages.filter(age => age >= 18);\n}",
        "tags": [
            "arrays",
            "filter",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Find the Specific Item",
        "problemId": 93,
        "slug": "find-specific-item",
        "description": "The `.find()` method returns the VALUE of the FIRST item that passes a test. If nothing is found, it returns `undefined`.\n\nCreate a function `findJava` that takes an array of strings `strings`. Use `.find()` to return the first string that is exactly `'JavaScript'`.\n\nExample 1:\nInput: ['HTML', 'CSS', 'JavaScript', 'Python']\nOutput: 'JavaScript'\n\nConstraints:\n- Must use `.find()`.\n- Function name: `findJava`.\n\nFollow-up: How is `.find()` different from `.filter()`? (Hint: find returns one value, filter returns an array).",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "findJava(['C++', 'JavaScript'])",
                "output": "'JavaScript'",
                "explanation": "Searching for the first exact string match.",
                "_id": "69bb072f5ea5b49d8ff03d38"
            }
        ],
        "constraints": [
            "Must use .find()",
            "Return specific string if found"
        ],
        "hints": [
            "Hint 1: `return strings.find(s => s === 'JavaScript');`Base64"
        ],
        "starterCode": "function findJava(strings) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "findJava(['Java', 'JavaScript', 'Go'])",
                "expected": "returns 'JavaScript'",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d39"
            },
            {
                "input": "findJava(['Ruby'])",
                "expected": "returns undefined",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d3a"
            }
        ],
        "solutionCode": "function findJava(strings) {\n  return strings.find(s => s === 'JavaScript');\n}",
        "tags": [
            "arrays",
            "find",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check for Any Negative",
        "problemId": 94,
        "slug": "check-for-any-negative-some",
        "description": "The `.some()` method returns `true` if AT LEAST ONE item in the array passes a test. Otherwise, it returns `false`.\n\nCreate a function `hasNegative` that takes an array of numbers `nums`. Use `.some()` to check if any number is less than `0`.\n\nExample 1:\nInput: [1, 2, -5, 4]\nOutput: true\n\nConstraints:\n- Must use `.some()`.\n- Return a boolean.\n\nFollow-up: Does `.some()` keep checking the rest of the array after it finds the first match? (Hint: No, it stops immediately! This is called short-circuiting).",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "hasNegative([10, 0, 5])",
                "output": "false",
                "explanation": "No values are below zero.",
                "_id": "69bb072f5ea5b49d8ff03d3c"
            }
        ],
        "constraints": [
            "Must use .some()",
            "Correct boolean return"
        ],
        "hints": [
            "Hint 1: `return nums.some(n => n < 0);`"
        ],
        "starterCode": "function hasNegative(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "hasNegative([1, -1, 1])",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d3d"
            },
            {
                "input": "hasNegative([0, 0, 0])",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d3e"
            }
        ],
        "solutionCode": "function hasNegative(nums) {\n  return nums.some(n => n < 0);\n}",
        "tags": [
            "arrays",
            "some",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Ensure All Pass",
        "problemId": 95,
        "slug": "ensure-all-pass-every",
        "description": "The `.every()` method returns `true` ONLY if EVERY item in the array passes a test.\n\nCreate a function `isAllPositive` that takes an array of numbers `nums`. Use `.every()` to check if all numbers are greater than `0`.\n\nExample 1:\nInput: [1, 5, 10]\nOutput: true\n\nExample 2:\nInput: [1, -2, 3]\nOutput: false\n\nConstraints:\n- Must use `.every()`.\n\nFollow-up: What does `.every()` return for an empty array `[]`? (Hint: It returns `true`—this is a mathematical concept called 'vacuous truth'!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "isAllPositive([4, 8])",
                "output": "true",
                "explanation": "Both elements satisfy the positive condition.",
                "_id": "69bb072f5ea5b49d8ff03d40"
            }
        ],
        "constraints": [
            "Must use .every()",
            "Must return boolean"
        ],
        "hints": [
            "Hint 1: `return nums.every(n => n > 0);`"
        ],
        "starterCode": "function isAllPositive(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "isAllPositive([1, 2, 3])",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d41"
            },
            {
                "input": "isAllPositive([1, 0, 1])",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d42"
            }
        ],
        "solutionCode": "function isAllPositive(nums) {\n  return nums.every(n => n > 0);\n}",
        "tags": [
            "arrays",
            "every",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Sort the Numbers",
        "problemId": 96,
        "slug": "sort-the-numbers",
        "description": "The `.sort()` method organizes items. Important: For numbers, you MUST provide a 'compare function', otherwise `10` comes before `2` because it sorts alphabetically!\n\nCreate a function `sortAscending` that takes an array `nums`. Return the array sorted from smallest to largest.\n\nExample 1:\nInput: [40, 100, 1, 5]\nOutput: [1, 5, 40, 100]\n\nConstraints:\n- Must use `.sort((a, b) => a - b)` logic.\n\nFollow-up: Why does `.sort()` without a function fail for numbers? (Hint: It converts everything to strings first!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "sortAscending([10, 2])",
                "output": "[2, 10]",
                "explanation": "Numerical sorting requires a subtraction-based comparator.",
                "_id": "69bb072f5ea5b49d8ff03d44"
            }
        ],
        "constraints": [
            "Must use comparative sorting",
            "Correct ascending order"
        ],
        "hints": [
            "Hint 1: `return nums.sort((a, b) => a - b);`"
        ],
        "starterCode": "function sortAscending(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "sortAscending([5, 2, 8, 1])",
                "expected": "returns [1, 2, 5, 8]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d45"
            }
        ],
        "solutionCode": "function sortAscending(nums) {\n  return nums.sort((a, b) => a - b);\n}",
        "tags": [
            "arrays",
            "sort"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Find Largest in Array",
        "problemId": 97,
        "slug": "find-largest-in-array",
        "description": "Create a function `findMax` that takes an array of numbers `arr` and returns the largest number.\n\nExample 1:\nInput: [1, 9, 3, 5]\nOutput: 9\n\nConstraints:\n- Use a loop or `Math.max()` with the spread operator `...`.\n\nFollow-up: How do you handle an empty array? (Hint: `Math.max()` on an empty list returns `-Infinity`!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "findMax([12, 45, 2])",
                "output": "45",
                "explanation": "Identifying the peak Value.",
                "_id": "69bb072f5ea5b49d8ff03d47"
            }
        ],
        "constraints": [
            "Return the highest number",
            "Handle positive/negative ranges"
        ],
        "hints": [
            "Hint 1: `return Math.max(...arr);`"
        ],
        "starterCode": "function findMax(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "findMax([10, 20, 5])",
                "expected": "returns 20",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d48"
            },
            {
                "input": "findMax([-10, -5])",
                "expected": "returns -5",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d49"
            }
        ],
        "solutionCode": "function findMax(arr) {\n  return Math.max(...arr);\n}",
        "tags": [
            "arrays",
            "math",
            "max"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Join Strings with Comma",
        "problemId": 98,
        "slug": "join-strings-with-comma",
        "description": "The `.join()` method turns an array into a single string, using a separator of your choice.\n\nCreate a function `formatList` that takes an array `items`. Return a string where all items are joined by a comma and a space (`, `).\n\nExample 1:\nInput: ['HTML', 'CSS']\nOutput: 'HTML, CSS'\n\nConstraints:\n- Use `.join(', ')`.\n\nFollow-up: What is the default separator if you just use `.join()` without any arguments? (Hint: It's a comma `,` without a space!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "formatList(['a', 'b'])",
                "output": "'a, b'",
                "explanation": "Serializing an array into a human-readable string.",
                "_id": "69bb072f5ea5b49d8ff03d4b"
            }
        ],
        "constraints": [
            "Must use .join() method",
            "Correct comma-space formatting"
        ],
        "hints": [
            "Hint 1: `return items.join(', ');`Base64"
        ],
        "starterCode": "function formatList(items) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "formatList(['apple', 'orange'])",
                "expected": "returns 'apple, orange'",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d4c"
            }
        ],
        "solutionCode": "function formatList(items) {\n  return items.join(', ');\n}",
        "tags": [
            "arrays",
            "strings",
            "join"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Reverse an Array",
        "problemId": 99,
        "slug": "reverse-an-array-method",
        "description": "The `.reverse()` method flips the order of an array. CAUTION: This method modifies the original array directly!\n\nCreate a function `flip` that takes an array `arr` and returns it reversed.\n\nExample 1:\nInput: [1, 2, 3]\nOutput: [3, 2, 1]\n\nConstraints:\n- Must use the built-in `.reverse()` method.\n\nFollow-up: If you don't want to change the original array, how can you make a copy first? (Hint: `[...arr].reverse()`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "flip(['hi', 'bye'])",
                "output": "['bye', 'hi']",
                "explanation": "Inverting the internal sequence.",
                "_id": "69bb072f5ea5b49d8ff03d4e"
            }
        ],
        "constraints": [
            "Use .reverse()",
            "Return the reversed reference"
        ],
        "hints": [
            "Hint 1: `return arr.reverse();`"
        ],
        "starterCode": "function flip(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "flip([10, 20])",
                "expected": "returns [20, 10]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d4f"
            }
        ],
        "solutionCode": "function flip(arr) {\n  return arr.reverse();\n}",
        "tags": [
            "arrays",
            "reverse"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Includes Value Check",
        "problemId": 100,
        "slug": "includes-value-check-array",
        "description": "The `.includes()` method checks if an array contains a specific item and returns `true` or `false`.\n\nCreate a function `hasLuckyNumber` that takes an array `nums` and checks if it contains the number `7`.\n\nExample 1:\nInput: [1, 5, 7, 2]\nOutput: true\n\nExample 2:\nInput: [10, 20]\nOutput: false\n\nConstraints:\n- Use `.includes(7)`.\n\nFollow-up: Does `.includes()` work for checking if an object is inside an array? (Hint: Only if the reference is exactly the same!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Arrays",
        "topicOrder": 9,
        "examples": [
            {
                "input": "hasLuckyNumber([7, 8, 9])",
                "output": "true",
                "explanation": "Direct existence check.",
                "_id": "69bb072f5ea5b49d8ff03d51"
            }
        ],
        "constraints": [
            "Must return boolean",
            "Use .includes()"
        ],
        "hints": [
            "Hint 1: `return nums.includes(7);`"
        ],
        "starterCode": "function hasLuckyNumber(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "hasLuckyNumber([1, 7, 3])",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d52"
            },
            {
                "input": "hasLuckyNumber([5])",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d53"
            }
        ],
        "solutionCode": "function hasLuckyNumber(nums) {\n  return nums.includes(7);\n}",
        "tags": [
            "arrays",
            "presence",
            "includes"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Get Object Keys",
        "problemId": 101,
        "slug": "get-object-keys",
        "description": "Topic 10: Objects Deep Dive. The `Object.keys()` method returns an array of a given object's property names (keys).\n\nCreate a function `getProperties` that takes an object `obj` and returns an array of its keys.\n\nExample 1:\nInput: { name: 'Shiv', age: 22 }\nOutput: ['name', 'age']\n\nConstraints:\n- Must use `Object.keys()`.\n\nFollow-up: Does `Object.keys()` return properties from the object's prototype? (Hint: No, only 'own' enumerable properties!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "getProperties({ a: 1 })",
                "output": "['a']",
                "explanation": "Extracting the naming labels from an object instance.",
                "_id": "69bb072f5ea5b49d8ff03d55"
            }
        ],
        "constraints": [
            "Must use Object.keys()",
            "Return result as array"
        ],
        "hints": [
            "Hint 1: `return Object.keys(obj);`"
        ],
        "starterCode": "function getProperties(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getProperties({ x: 1, y: 2 })",
                "expected": "returns ['x', 'y']",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d56"
            }
        ],
        "solutionCode": "function getProperties(obj) {\n  return Object.keys(obj);\n}",
        "tags": [
            "objects",
            "metadata",
            "keys"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Get Object Values",
        "problemId": 102,
        "slug": "get-object-values",
        "description": "The `Object.values()` method returns an array of a given object's OWN enumerable string-keyed property values.\n\nCreate a function `getPropertyValues` that takes an object `obj` and returns an array of its values.\n\nExample 1:\nInput: { a: 10, b: 20 }\nOutput: [10, 20]\n\nConstraints:\n- Must use `Object.values()`.\n\nFollow-up: In what order does `Object.values()` return the data? (Hint: The same order as a `for...in` loop).",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "getPropertyValues({ name: 'Ansh' })",
                "output": "['Ansh']",
                "explanation": "Extracting the actual data stored behind the keys.",
                "_id": "69bb072f5ea5b49d8ff03d58"
            }
        ],
        "constraints": [
            "Must use Object.values()",
            "Return result as array"
        ],
        "hints": [
            "Hint 1: `return Object.values(obj);`"
        ],
        "starterCode": "function getPropertyValues(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getPropertyValues({ score: 100, rank: 1 })",
                "expected": "returns [100, 1]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d59"
            }
        ],
        "solutionCode": "function getPropertyValues(obj) {\n  return Object.values(obj);\n}",
        "tags": [
            "objects",
            "metadata",
            "values"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check Property Existence",
        "problemId": 103,
        "slug": "check-property-existence",
        "description": "The `.hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).\n\nCreate a function `hasKey` that takes an object `obj` and a string `key`. Return `true` if `obj` has that `key`, otherwise `false`.\n\nExample 1:\nInput: { id: 1 }, 'id'\nOutput: true\n\nConstraints:\n- Use `obj.hasOwnProperty(key)` or the `in` operator.\n\nFollow-up: Why is `obj.key !== undefined` not a perfect way to check if a key exists? (Hint: What if the key exists but its value IS undefined?)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "hasKey({ a: 1 }, 'b')",
                "output": "false",
                "explanation": "Verifying key presence via native property checks.",
                "_id": "69bb072f5ea5b49d8ff03d5b"
            }
        ],
        "constraints": [
            "Must return boolean",
            "Correct existence check"
        ],
        "hints": [
            "Hint 1: `return obj.hasOwnProperty(key);`"
        ],
        "starterCode": "function hasKey(obj, key) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "hasKey({ name: 'Shiv' }, 'name')",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d5c"
            },
            {
                "input": "hasKey({}, 'age')",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d5d"
            }
        ],
        "solutionCode": "function hasKey(obj, key) {\n  return obj.hasOwnProperty(key);\n}",
        "tags": [
            "objects",
            "metadata",
            "membership"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Merge Two Objects",
        "problemId": 104,
        "slug": "merge-two-objects",
        "description": "You can merge multiple objects into one using the Spread operator `...` or `Object.assign()`.\n\nCreate a function `mergeObjects` that takes `obj1` and `obj2`. Return a NEW object that contains properties from both.\n\nExample 1:\nInput: { a: 1 }, { b: 2 }\nOutput: { a: 1, b: 2 }\n\nConstraints:\n- Use `{ ...obj1, ...obj2 }` syntax.\n\nFollow-up: If both objects have a property with the same name, which one 'wins' in the merge? (Hint: The last one spread!).",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "mergeObjects({ x: 0 }, { y: 1 })",
                "output": "{ x: 0, y: 1 }",
                "explanation": "Combining separate data entities into a unified structure.",
                "_id": "69bb072f5ea5b49d8ff03d5f"
            }
        ],
        "constraints": [
            "Use spread operator",
            "Return a new combined object"
        ],
        "hints": [
            "Hint 1: `return { ...obj1, ...obj2 };`"
        ],
        "starterCode": "function mergeObjects(obj1, obj2) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "mergeObjects({ name: 'Ansh' }, { age: 25 })",
                "expected": "returns { name: 'Ansh', age: 25 }",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d60"
            }
        ],
        "solutionCode": "function mergeObjects(obj1, obj2) {\n  return { ...obj1, ...obj2 };\n}",
        "tags": [
            "objects",
            "spread",
            "merge"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Count Object Properties",
        "problemId": 105,
        "slug": "count-object-properties",
        "description": "Objects don't have a `.length` property. To count how many keys an object has, you must first convert it to an array.\n\nCreate a function `countProps` that takes an object `obj` and returns the number of keys it contains.\n\nExample 1:\nInput: { id: 1, name: 'Shiv', role: 'Dev' }\nOutput: 3\n\nConstraints:\n- Use `Object.keys()` combined with `.length`.\n\nFollow-up: Why is this better than manually looping with a counter variable?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "countProps({ a: 1, b: 2 })",
                "output": "2",
                "explanation": "Calculating the breadth of an object's schema.",
                "_id": "69bb072f5ea5b49d8ff03d62"
            }
        ],
        "constraints": [
            "Must return a number",
            "Correct calculation logic"
        ],
        "hints": [
            "Hint 1: `return Object.keys(obj).length;`"
        ],
        "starterCode": "function countProps(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "countProps({ x: 1, y: 2, z: 3, w: 4 })",
                "expected": "returns 4",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d63"
            }
        ],
        "solutionCode": "function countProps(obj) {\n  return Object.keys(obj).length;\n}",
        "tags": [
            "objects",
            "metadata",
            "length"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Freeze the Object",
        "problemId": 106,
        "slug": "freeze-the-object",
        "description": "The `Object.freeze()` method prevents any changes to an object (no adding, deleting, or updating properties).\n\nCreate a function `protectData` that takes an object `obj`, freezes it, and returns the frozen object.\n\nExample 1:\nInput: { version: 1.0 }\nOutput: Frozen object\n\nConstraints:\n- Must use `Object.freeze()`.\n\nFollow-up: Does `Object.freeze()` work 'deeply' for nested objects? (Hint: No, it is a shallow freeze!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "protectData({ a: 1 })",
                "output": "{ a: 1 }",
                "explanation": "Locking an object instance to prevent mutation.",
                "_id": "69bb072f5ea5b49d8ff03d65"
            }
        ],
        "constraints": [
            "Use Object.freeze()",
            "Return the locked reference"
        ],
        "hints": [
            "Hint 1: `return Object.freeze(obj);`"
        ],
        "starterCode": "function protectData(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "Check immutability",
                "expected": "Object.isFrozen(protectData({})) is true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d66"
            }
        ],
        "solutionCode": "function protectData(obj) {\n  return Object.freeze(obj);\n}",
        "tags": [
            "objects",
            "security",
            "immutability"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Sum Values in Object",
        "problemId": 107,
        "slug": "sum-values-in-object",
        "description": "Combine objects and loops. Create a function `sumScores` that takes an object where values are numbers (e.g., `{ math: 90, physics: 80 }`). Return the total sum of all values.\n\nExample 1:\nInput: { a: 10, b: 20, c: 30 }\nOutput: 60\n\nConstraints:\n- Use `Object.values()` and a loop or `.reduce()`.\n\nFollow-up: What happens if the object is empty? (Ensure you return 0).",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "sumScores({ points: 5, bonus: 5 })",
                "output": "10",
                "explanation": "Aggregating numerical data values across key pairs.",
                "_id": "69bb072f5ea5b49d8ff03d68"
            }
        ],
        "constraints": [
            "Must return number",
            "Handle empty objects correctly"
        ],
        "hints": [
            "Hint 1: `let vals = Object.values(obj); let sum = 0; for (let v of vals) ...`"
        ],
        "starterCode": "function sumScores(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "sumScores({ x: 1, y: 1, z: 1 })",
                "expected": "returns 3",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d69"
            },
            {
                "input": "sumScores({})",
                "expected": "returns 0",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d6a"
            }
        ],
        "solutionCode": "function sumScores(obj) {\n  let values = Object.values(obj);\n  let total = 0;\n  for (let val of values) {\n    total += val;\n  }\n  return total;\n}",
        "tags": [
            "objects",
            "iteration",
            "math"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Convert Object to Array",
        "problemId": 108,
        "slug": "convert-object-to-array",
        "description": "The `Object.entries()` method returns an array of an object's own enumerable string-keyed property `[key, value]` pairs.\n\nCreate a function `toPairs` that takes an object `obj` and returns an array of its entries.\n\nExample 1:\nInput: { name: 'Shiv' }\nOutput: [['name', 'Shiv']]\n\nConstraints:\n- Must use `Object.entries()`.\n\nFollow-up: Why is this format useful when you need to loop over an object and transform BOTH keys and values?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "toPairs({ a: 1, b: 2 })",
                "output": "[['a', 1], ['b', 2]]",
                "explanation": "Flattening an object into an array of tuples.",
                "_id": "69bb072f5ea5b49d8ff03d6c"
            }
        ],
        "constraints": [
            "Use Object.entries()",
            "Return correctly structured pairs"
        ],
        "hints": [
            "Hint 1: `return Object.entries(obj);`"
        ],
        "starterCode": "function toPairs(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "toPairs({ x: 1 })",
                "expected": "returns [['x', 1]]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d6d"
            }
        ],
        "solutionCode": "function toPairs(obj) {\n  return Object.entries(obj);\n}",
        "tags": [
            "objects",
            "conversion",
            "entries"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Invert Object Keys and Values",
        "problemId": 109,
        "slug": "invert-object-keys-and-values",
        "description": "Create a function `invert` that takes an object and swaps its keys and values. Assume all values are strings or numbers.\n\nExample 1:\nInput: { a: 'apple', b: 'banana' }\nOutput: { apple: 'a', banana: 'b' }\n\nConstraints:\n- Return a NEW object.\n- Use a loop over keys or entries.\n\nFollow-up: What happens if two keys have the same value? (Hint: The latest one processed will overwrite the previous key!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "invert({ name: 'Ansh' })",
                "output": "{ Ansh: 'name' }",
                "explanation": "Flipping the directional mapping of key-value pairs.",
                "_id": "69bb072f5ea5b49d8ff03d6f"
            }
        ],
        "constraints": [
            "Must correctly swap mapping",
            "Return object"
        ],
        "hints": [
            "Hint 1: `let newObj = {}; for (let key in obj) { newObj[obj[key]] = key; } return newObj;`"
        ],
        "starterCode": "function invert(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "invert({ first: 1, second: 2 })",
                "expected": "returns { 1: 'first', 2: 'second' }",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d70"
            }
        ],
        "solutionCode": "function invert(obj) {\n  let res = {};\n  for (let key in obj) {\n    res[obj[key]] = key;\n  }\n  return res;\n}",
        "tags": [
            "objects",
            "logic",
            "transformation"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Clean Null Properties",
        "problemId": 110,
        "slug": "clean-null-properties",
        "description": "Create a function `removeNulls` that takes an object and removes any properties that have the value `null` (but keep `undefined` or `0`). \n\nExample 1:\nInput: { a: 1, b: null, c: 3 }\nOutput: { a: 1, c: 3 }\n\nConstraints:\n- Use the `delete` operator.\n- Modify the original object or return a new one (clean copy preferred).\n\nFollow-up: Why is it often a good idea to clean API responses before sending them to the UI?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "removeNulls({ status: 'ok', data: null })",
                "output": "{ status: 'ok' }",
                "explanation": "Sanitizing data structures by purging empty indicators.",
                "_id": "69bb072f5ea5b49d8ff03d72"
            }
        ],
        "constraints": [
            "Must ONLY remove null values",
            "Correct conditional check (=== null)"
        ],
        "hints": [
            "Hint 1: `for (let key in obj) { if (obj[key] === null) delete obj[key]; }`"
        ],
        "starterCode": "function removeNulls(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "removeNulls({ valid: true, empty: null })",
                "expected": "returns { valid: true }",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d73"
            },
            {
                "input": "removeNulls({ zero: 0 })",
                "expected": "returns { zero: 0 }",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d74"
            }
        ],
        "solutionCode": "function removeNulls(obj) {\n  for (let key in obj) {\n    if (obj[key] === null) {\n      delete obj[key];\n    }\n  }\n  return obj;\n}",
        "tags": [
            "objects",
            "logic",
            "cleanup"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Filter Unique Numbers",
        "problemId": 111,
        "slug": "filter-unique-numbers",
        "description": "Create a function `getUnique` that takes an array of numbers `nums` and returns a new array containing only the unique values (remove any duplicates).\n\nExample 1:\nInput: [1, 2, 2, 3, 4, 4]\nOutput: [1, 2, 3, 4]\n\nConstraints:\n- Use a `Set` or `.filter()` with `.indexOf()`.\n\nFollow-up: Why is using a `Set` faster for large arrays than `.filter()`? (Hint: Big O complexity difference!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "getUnique([1, 1, 1])",
                "output": "[1]",
                "explanation": "Purging redundant entries via value-based distinctness.",
                "_id": "69bb072f5ea5b49d8ff03d76"
            }
        ],
        "constraints": [
            "Must return only unique values",
            "Must maintain original data type"
        ],
        "hints": [
            "Hint 1: `return [...new Set(nums)];`"
        ],
        "starterCode": "function getUnique(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getUnique([1, 2, 3, 2, 1])",
                "expected": "returns [1, 2, 3]",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d77"
            }
        ],
        "solutionCode": "function getUnique(nums) {\n  return [...new Set(nums)];\n}",
        "tags": [
            "algorithms",
            "duplicates",
            "sets"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Count Character Occurrences",
        "problemId": 112,
        "slug": "count-character-occurrences",
        "description": "Create a function `countChar` that takes a string `str` and a character `char`. Return how many times that `char` appears in the `str`.\n\nExample 1:\nInput: 'banana', 'a'\nOutput: 3\n\nConstraints:\n- Loop through the string or use `.split()`.\n\nFollow-up: How would you make this function case-insensitive?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "countChar('hello', 'l')",
                "output": "2",
                "explanation": "Tallying instances of the target character.",
                "_id": "69bb072f5ea5b49d8ff03d79"
            }
        ],
        "constraints": [
            "Must count exact matches",
            "Return result as number"
        ],
        "hints": [
            "Hint 1: `let count = 0; for (let c of str) if (c === char) count++; return count;`"
        ],
        "starterCode": "function countChar(str, char) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "countChar('javascript', 'a')",
                "expected": "returns 2",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d7a"
            },
            {
                "input": "countChar('code', 'x')",
                "expected": "returns 0",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d7b"
            }
        ],
        "solutionCode": "function countChar(str, char) {\n  let count = 0;\n  for (let c of str) {\n    if (c === char) count++;\n  }\n  return count;\n}",
        "tags": [
            "algorithms",
            "strings",
            "frequency"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Sum of Array Squares",
        "problemId": 113,
        "slug": "sum-of-array-squares",
        "description": "Create a function `sumSquares` that takes an array of numbers `arr`. Square each number and then return the total sum of all those squares.\n\nExample 1:\nInput: [1, 2, 3]\nOutput: 14 (1 + 4 + 9)\n\nConstraints:\n- Use a loop or `.reduce()`.\n\nFollow-up: Is it better to chain `.map()` and `.reduce()` or just use a single loop? (Think about performance).",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "sumSquares([2, 4])",
                "output": "20",
                "explanation": "Calculating cumulative power values.",
                "_id": "69bb072f5ea5b49d8ff03d7d"
            }
        ],
        "constraints": [
            "Must correctly square then sum",
            "Return total as number"
        ],
        "hints": [
            "Hint 1: `return arr.reduce((sum, n) => sum + n * n, 0);`"
        ],
        "starterCode": "function sumSquares(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "sumSquares([1, 1, 1])",
                "expected": "returns 3",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d7e"
            },
            {
                "input": "sumSquares([])",
                "expected": "returns 0",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d7f"
            }
        ],
        "solutionCode": "function sumSquares(arr) {\n  return arr.reduce((acc, current) => acc + current * current, 0);\n}",
        "tags": [
            "algorithms",
            "math",
            "arrays"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check for Palindrome",
        "problemId": 114,
        "slug": "check-for-palindrome",
        "description": "A palindrome is a word that reads the same forwards and backwards (e.g., 'racecar').\n\nCreate a function `isPalindrome` that takes a string `str`. Return `true` if it's a palindrome, otherwise `false`.\n\nExample 1:\nInput: 'level'\nOutput: true\n\nExample 2:\nInput: 'hello'\nOutput: false\n\nConstraints:\n- You can use `.split('').reverse().join('')` or a loop.\n\nFollow-up: How would you handle a palindrome sentence with spaces (e.g., 'a man a plan a canal panama')?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "isPalindrome('noon')",
                "output": "true",
                "explanation": "Verifying structural symmetry.",
                "_id": "69bb072f5ea5b49d8ff03d81"
            }
        ],
        "constraints": [
            "Symmetry verification",
            "Boolean return"
        ],
        "hints": [
            "Hint 1: `return str === str.split('').reverse().join('');`"
        ],
        "starterCode": "function isPalindrome(str) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "isPalindrome('racecar')",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d82"
            },
            {
                "input": "isPalindrome('world')",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d83"
            }
        ],
        "solutionCode": "function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}",
        "tags": [
            "algorithms",
            "strings",
            "symmetry"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "FizzBuzz Algorithm",
        "problemId": 115,
        "slug": "fizzbuzz-algorithm",
        "description": "The classic coding interview question! Create a function `fizzBuzz` that takes a number `n` and returns:\n- `'FizzBuzz'` if `n` is divisible by 3 AND 5.\n- `'Fizz'` if `n` is divisible by 3.\n- `'Buzz'` if `n` is divisible by 5.\n- The number itself (as a string) if none of the above match.\n\nExample 1:\nInput: 15\nOutput: 'FizzBuzz'\n\nExample 2:\nInput: 3\nOutput: 'Fizz'\n\nConstraints:\n- Correct logic order (check for both first!)\n\nFollow-up: Why must you check for 'FizzBuzz' (divisible by 15) before checking for 'Fizz' or 'Buzz' separately?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "fizzBuzz(10)",
                "output": "'Buzz'",
                "explanation": "Checking modular divisibility in a prioritized hierarchy.",
                "_id": "69bb072f5ea5b49d8ff03d85"
            }
        ],
        "constraints": [
            "Explicit divisibility branching",
            "Correct return string"
        ],
        "hints": [
            "Hint 1: `if (n % 15 === 0) return 'FizzBuzz';`"
        ],
        "starterCode": "function fizzBuzz(n) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "fizzBuzz(9)",
                "expected": "returns 'Fizz'",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d86"
            },
            {
                "input": "fizzBuzz(7)",
                "expected": "returns '7'",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d87"
            }
        ],
        "solutionCode": "function fizzBuzz(n) {\n  if (n % 15 === 0) return 'FizzBuzz';\n  if (n % 3 === 0) return 'Fizz';\n  if (n % 5 === 0) return 'Buzz';\n  return String(n);\n}",
        "tags": [
            "algorithms",
            "loops",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Average of Array",
        "problemId": 116,
        "slug": "average-of-array",
        "description": "Create a function `findAverage` that takes an array of numbers `nums` and returns the average (mean) value.\n\nExample 1:\nInput: [10, 20, 30]\nOutput: 20\n\nConstraints:\n- Return 0 if the array is empty.\n- Sum all values then divide by length.\n\nFollow-up: What is the Big O of this operation?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "findAverage([5, 5])",
                "output": "5",
                "explanation": "Calculating the center of a numerical distribution.",
                "_id": "69bb072f5ea5b49d8ff03d89"
            }
        ],
        "constraints": [
            "Handle divide-by-zero (empty list)",
            "Return correctly calculated average"
        ],
        "hints": [
            "Hint 1: `if (nums.length === 0) return 0; let total = nums.reduce((s, n) => s + n, 0); return total / nums.length;`"
        ],
        "starterCode": "function findAverage(nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "findAverage([1, 2, 3, 4, 10])",
                "expected": "returns 4",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d8a"
            },
            {
                "input": "findAverage([])",
                "expected": "returns 0",
                "isHidden": true,
                "_id": "69bb072f5ea5b49d8ff03d8b"
            }
        ],
        "solutionCode": "function findAverage(nums) {\n  if (nums.length === 0) return 0;\n  let sum = nums.reduce((a, b) => a + b, 0);\n  return sum / nums.length;\n}",
        "tags": [
            "algorithms",
            "math",
            "arrays"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Find the Longest Word",
        "problemId": 117,
        "slug": "find-longest-word",
        "description": "Create a function `longestWord` that takes an array of strings `words` and returns the longest string among them. If multiple have the same length, return the first one.\n\nExample 1:\nInput: ['apple', 'banana', 'cherry']\nOutput: 'banana'\n\nConstraints:\n- Return an empty string if the array is empty.\n- Use a loop to compare lengths.\n\nFollow-up: How would you return ALL words if there's a tie for the longest?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "longestWord(['hi', 'hello'])",
                "output": "'hello'",
                "explanation": "Measuring string scale via the length property in iteration.",
                "_id": "69bb072f5ea5b49d8ff03d8d"
            }
        ],
        "constraints": [
            "Must return content string",
            "Handle length comparison"
        ],
        "hints": [
            "Hint 1: `let max = ''; for (let w of words) if (w.length > max.length) max = w;`"
        ],
        "starterCode": "function longestWord(words) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "longestWord(['cat', 'elephant', 'dog'])",
                "expected": "returns 'elephant'",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d8e"
            }
        ],
        "solutionCode": "function longestWord(words) {\n  let max = '';\n  for (let w of words) {\n    if (w.length > max.length) {\n      max = w;\n    }\n  }\n  return max;\n}",
        "tags": [
            "algorithms",
            "strings",
            "comparison"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Capitalize First Letters",
        "problemId": 118,
        "slug": "capitalize-first-letters",
        "description": "Create a function `capitalizeSentence` that takes a sentence (string) and returns a new sentence where every word starts with a capital letter.\n\nExample 1:\nInput: 'hello world'\nOutput: 'Hello World'\n\nConstraints:\n- Use `.split(' ')` to get words.\n- Transform each word, then use `.join(' ')`.\n\nFollow-up: Does this handle sentences with multiple spaces in between?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "'go shiv go'",
                "output": "'Go Shiv Go'",
                "explanation": "Transforming text case via word-by-word tokenization.",
                "_id": "69bb072f5ea5b49d8ff03d90"
            }
        ],
        "constraints": [
            "Must capitalize exactly one letter per token",
            "Maintain spacing"
        ],
        "hints": [
            "Hint 1: `return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');`"
        ],
        "starterCode": "function capitalizeSentence(sentence) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "capitalizeSentence('js is fun')",
                "expected": "returns 'Js Is Fun'",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d91"
            }
        ],
        "solutionCode": "function capitalizeSentence(sentence) {\n  return sentence.split(' ').map(word => {\n    if (word.length === 0) return word;\n    return word[0].toUpperCase() + word.slice(1);\n  }).join(' ');\n}",
        "tags": [
            "algorithms",
            "strings",
            "formatting"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Filter Key-Value Search",
        "problemId": 119,
        "slug": "filter-key-value-search",
        "description": "Topic 11 Mixed. Create a function `findUserByName` that takes an array of user objects `users` and a string `searchName`. Return the complete user object that matches the name. If no match, return `null`.\n\nExample 1:\nInput: [{ name: 'Shiv', id: 1 }, { name: 'Ansh', id: 2 }], 'Ansh'\nOutput: { name: 'Ansh', id: 2 }\n\nConstraints:\n- Must use `.find()` on the array.\n\nFollow-up: What's the difference between using `.find()` and `.filter()` in this object search?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "findUserByName([{name:'A'}], 'B')",
                "output": "null",
                "explanation": "Searching for nested property matches within a collection.",
                "_id": "69bb072f5ea5b49d8ff03d93"
            }
        ],
        "constraints": [
            "Must return object reference",
            "Handle unsuccessful search with null"
        ],
        "hints": [
            "Hint 1: `return users.find(u => u.name === searchName) || null;`"
        ],
        "starterCode": "function findUserByName(users, searchName) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "findUserByName([{name: 'Ansh'}], 'Ansh')",
                "expected": "returns {name: 'Ansh'}",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d94"
            }
        ],
        "solutionCode": "function findUserByName(users, searchName) {\n  return users.find(user => user.name === searchName) || null;\n}",
        "tags": [
            "algorithms",
            "searching",
            "objects"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Calculate GPA",
        "problemId": 120,
        "slug": "calculate-gpa-algo",
        "description": "Create a function `getGPA` that takes an array of grade objects `grades` (e.g., `[{ score: 100 }, { score: 80 }]`). Calculate the total average and return it.\n\nExample 1:\nInput: [{ score: 100 }, { score: 0 }]\nOutput: 50\n\nConstraints:\n- Handle empty arrays (return 0).\n- Extract scores from object keys.\n\nFollow-up: How do you round the GPA to 2 decimal places? (Hint: `.toFixed(2)`)!",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 11,
        "examples": [
            {
                "input": "[{score:90}, {score:90}]",
                "output": "90",
                "explanation": "Averaging properties extracted from an object array.",
                "_id": "69bb072f5ea5b49d8ff03d96"
            }
        ],
        "constraints": [
            "Aggregate property values",
            "Correct division logic"
        ],
        "hints": [
            "Hint 1: `let sum = grades.reduce((s, g) => s + g.score, 0); return sum / grades.length;`"
        ],
        "starterCode": "function getGPA(grades) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getGPA([{score: 80}, {score: 70}])",
                "expected": "returns 75",
                "isHidden": false,
                "_id": "69bb072f5ea5b49d8ff03d97"
            }
        ],
        "solutionCode": "function getGPA(grades) {\n  if (grades.length === 0) return 0;\n  let total = grades.reduce((sum, g) => sum + g.score, 0);\n  return total / grades.length;\n}",
        "tags": [
            "algorithms",
            "math",
            "objects"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Merge Objects with Priority",
        "problemId": 121,
        "slug": "merge-objects-with-priority",
        "description": "Topic 10: Advanced Objects. When merging two objects, if they share a key, the last object in the spread takes priority.\n\nCreate a function `updateSettings` that takes two objects: `defaultSettings` and `userSettings`. Return a new object that combines both, but ensures that `userSettings` overwrites any matching keys in `defaultSettings`.\n\nExample 1:\nInput: { theme: 'light', volume: 50 }, { theme: 'dark' }\nOutput: { theme: 'dark', volume: 50 }\n\nConstraints:\n- Use the spread operator `...`.\n\nFollow-up: What happens if `userSettings` contains a key that `defaultSettings` does not have? (Hint: It gets added to the final object!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "updateSettings({a:1}, {a:2, b:3})",
                "output": "{a:2, b:3}",
                "explanation": "Second object properties supersede the first on collisions.",
                "_id": "69bb08211b6d63bc980859c2"
            }
        ],
        "constraints": [
            "Use spread operator",
            "Correct priority ordering"
        ],
        "hints": [
            "Hint 1: `return { ...defaultSettings, ...userSettings };`"
        ],
        "starterCode": "function updateSettings(defaultSettings, userSettings) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "updateSettings({a: 1}, {a: 5})",
                "expected": "returns {a: 5}",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859c3"
            }
        ],
        "solutionCode": "function updateSettings(defaultSettings, userSettings) {\n  return { ...defaultSettings, ...userSettings };\n}",
        "tags": [
            "objects",
            "spread",
            "merge"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Deep Memory Reference",
        "problemId": 122,
        "slug": "deep-memory-reference",
        "description": "In JavaScript, if you set `obj2 = obj1`, they both point to the SAME object in memory. Changing one changes the other.\n\nCreate a function `isSameReference` that takes two objects. Using the strict equality operator `===`, return `true` if they refer to the exact same object in memory, and `false` otherwise.\n\nExample 1:\nInput: `const a = {}; const b = a;`, isSameReference(a, b)\nOutput: true\n\nExample 2:\nInput: `isSameReference({}, {})` \nOutput: false (even though they look the same, they are different objects in memory!)\n\nFollow-up: Why are two empty objects `{}` not equal to each other?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "isSameReference(o1, o2)",
                "output": "boolean",
                "explanation": "Verifying memory pointer identity vs structural equality.",
                "_id": "69bb08211b6d63bc980859c5"
            }
        ],
        "constraints": [
            "Must use === for reference check"
        ],
        "hints": [
            "Hint 1: `return obj1 === obj2;`"
        ],
        "starterCode": "function isSameReference(obj1, obj2) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "isSameReference(objA, objA)",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859c6"
            },
            {
                "input": "isSameReference({}, {})",
                "expected": "returns false",
                "isHidden": true,
                "_id": "69bb08211b6d63bc980859c7"
            }
        ],
        "solutionCode": "function isSameReference(obj1, obj2) {\n  return obj1 === obj2;\n}",
        "tags": [
            "objects",
            "references",
            "equality"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Object Shorthand syntax",
        "problemId": 123,
        "slug": "object-shorthand-syntax",
        "description": "If your property name is the same as your variable name, you can use a shorthand: `{ name }` instead of `{ name: name }`.\n\nCreate a function `createUser` that takes `name` and `age` as parameters. Return an object containing both using the SHORTHAND syntax.\n\nExample 1:\nInput: 'Shiv', 22\nOutput: { name: 'Shiv', age: 22 }\n\nConstraints:\n- Must NOT use the colon `:` in the object literal return.\n\nFollow-up: Why is this shorthand preferred in modern JS development?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "createUser('Ansh', 25)",
                "output": "{ name: 'Ansh', age: 25 }",
                "explanation": "Simplifying literal declaration via variable-key mapping.",
                "_id": "69bb08211b6d63bc980859c9"
            }
        ],
        "constraints": [
            "No colon in object body",
            "Correct key naming"
        ],
        "hints": [
            "Hint 1: `return { name, age };`"
        ],
        "starterCode": "function createUser(name, age) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createUser('A', 1)",
                "expected": "returns {name: 'A', age: 1}",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859ca"
            }
        ],
        "solutionCode": "function createUser(name, age) {\n  return { name, age };\n}",
        "tags": [
            "objects",
            "shorthand",
            "es6"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Compute Key Dynamically",
        "problemId": 124,
        "slug": "compute-key-dynamically",
        "description": "You can use square brackets `[]` inside an object literal to create keys from variables. This is called 'Computed Property Names'.\n\nCreate a function `makeDynamicObject` that takes two strings: `keyName` and `value`. Return an object where the property name is whatever `keyName` holds.\n\nExample 1:\nInput: 'status', 'online'\nOutput: { status: 'online' }\n\nConstraints:\n- Must use `[keyName]` syntax.\n\nFollow-up: How would you add a computed key to an object that ALREADY exists?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "makeDynamicObject('color', 'red')",
                "output": "{ color: 'red' }",
                "explanation": "Evaluating variable content to determine object schema.",
                "_id": "69bb08211b6d63bc980859cc"
            }
        ],
        "constraints": [
            "Must use computed property syntax",
            "Correct value assignment"
        ],
        "hints": [
            "Hint 1: `return { [keyName]: value };`"
        ],
        "starterCode": "function makeDynamicObject(keyName, value) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "makeDynamicObject('id', 123)",
                "expected": "returns {id: 123}",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859cd"
            }
        ],
        "solutionCode": "function makeDynamicObject(keyName, value) {\n  return { [keyName]: value };\n}",
        "tags": [
            "objects",
            "computed-keys",
            "es6"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Destructure the Profile",
        "problemId": 125,
        "slug": "destructure-the-profile",
        "description": "Object Destructuring allows you to unpack properties into separate variables quickly.\n\nCreate a function `getBio` that takes a `user` object with `name` and `city` properties. Use destructuring to extract them and return the string: `${name} lives in ${city}`.\n\nExample 1:\nInput: { name: 'Shiv', city: 'Delhi' }\nOutput: 'Shiv lives in Delhi'\n\nConstraints:\n- Use `const { name, city } = user;` logic.\n\nFollow-up: Can you destructure directly in the function parameter list? (e.g. `function getBio({ name, city })`)?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "{name: 'A', city: 'B'}",
                "output": "'A lives in B'",
                "explanation": "Unpacking object values into localized variables.",
                "_id": "69bb08211b6d63bc980859cf"
            }
        ],
        "constraints": [
            "Must use destructuring syntax",
            "Return correctly interpolated string"
        ],
        "hints": [
            "Hint 1: `const { name, city } = user;`"
        ],
        "starterCode": "function getBio(user) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getBio({name: 'Ansh', city: 'Noida'})",
                "expected": "returns 'Ansh lives in Noida'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859d0"
            }
        ],
        "solutionCode": "function getBio(user) {\n  const { name, city } = user;\n  return `${name} lives in ${city}`;\n}",
        "tags": [
            "objects",
            "destructuring",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Renaming During Destructure",
        "problemId": 126,
        "slug": "renaming-during-destructure",
        "description": "When destructuring, you can rename a property to a different variable name using a colon `:`. \n\nCreate a function `renameKeys` that takes an object with `id` and `user_full_name`. Use destructuring to rename `user_full_name` to `fullName` and return the `fullName` variable.\n\nExample 1:\nInput: { id: 1, user_full_name: 'Shiv Mani' }\nOutput: 'Shiv Mani'\n\nConstraints:\n- Must rename the key inside the destructuring bracket.\n\nFollow-up: Why would you want to rename a key? (Hint: To match your project's naming conventions!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "{user_full_name: 'Ansh'}",
                "output": "'Ansh'",
                "explanation": "Mapping external data schema to internal naming conventions.",
                "_id": "69bb08211b6d63bc980859d2"
            }
        ],
        "constraints": [
            "Must use : inside destructuring",
            "Return renamed variable"
        ],
        "hints": [
            "Hint 1: `const { user_full_name: fullName } = obj;`"
        ],
        "starterCode": "function renameKeys(obj) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "renameKeys({user_full_name: 'Shiv'})",
                "expected": "returns 'Shiv'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859d3"
            }
        ],
        "solutionCode": "function renameKeys(obj) {\n  const { user_full_name: fullName } = obj;\n  return fullName;\n}",
        "tags": [
            "objects",
            "destructuring",
            "renaming"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Deep Object Access (Optional Chaining)",
        "problemId": 127,
        "slug": "deep-object-access-optional-chaining",
        "description": "If you try to access `user.address.city` but `user.address` is `null`, your app crashes! Optional Chaining `?.` prevents this by returning `undefined` instead of crashing.\n\nCreate a function `getCity` that takes a `user` object. Use optional chaining to return `user.location.city` Safely.\n\nExample 1:\nInput: { location: { city: 'Delhi' } }\nOutput: 'Delhi'\n\nExample 2:\nInput: { name: 'Shiv' }\nOutput: undefined\n\nConstraints:\n- Must use the `?.` operator.\n\nFollow-up: How is `?.` different from using multiple `&&` checks?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Objects",
        "topicOrder": 10,
        "examples": [
            {
                "input": "{location: null}",
                "output": "undefined",
                "explanation": "Safe navigation through potentially missing object tree branches.",
                "_id": "69bb08211b6d63bc980859d5"
            }
        ],
        "constraints": [
            "Must use ?. operator",
            "Return correctly extracted value or undefined"
        ],
        "hints": [
            "Hint 1: `return user?.location?.city;`"
        ],
        "starterCode": "function getCity(user) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getCity({location: {city: 'Noida'}})",
                "expected": "returns 'Noida'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859d6"
            },
            {
                "input": "getCity({})",
                "expected": "returns undefined",
                "isHidden": true,
                "_id": "69bb08211b6d63bc980859d7"
            }
        ],
        "solutionCode": "function getCity(user) {\n  return user?.location?.city;\n}",
        "tags": [
            "objects",
            "optional-chaining",
            "es2020"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Topic 11: Local Variable Shadowing",
        "problemId": 128,
        "slug": "local-variable-shadowing",
        "description": "Topic 11: Scope & Hoisting. When a local variable has the same name as a global one, the local one is prioritized.\n\nCreate a global variable `const points = 10`.\nThen create a function `getPoints` that declares its own `const points = 20` and returns it.\n\nExample 1:\nInput: getPoints()\nOutput: 20\n\nConstraints:\n- Name BOTH variables `points`.\n- One must be global, one must be local to the function.\n\nFollow-up: If you change the global `points`, will the function return a different value? (Hint: No, because it uses its own local copy!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "getPoints()",
                "output": "20",
                "explanation": "Inner scope variables hide outer scope variables of the same name.",
                "_id": "69bb08211b6d63bc980859d9"
            }
        ],
        "constraints": [
            "Consistent variable names",
            "Correct return value"
        ],
        "hints": [
            "Hint 1: `const points = 10; function getPoints() { const points = 20; return points; }`"
        ],
        "starterCode": "// Global variable here\n\nfunction getPoints() {\n  // Local variable here\n}\n",
        "testCases": [
            {
                "input": "getPoints()",
                "expected": "returns 20",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859da"
            }
        ],
        "solutionCode": "const points = 10;\nfunction getPoints() {\n  const points = 20;\n  return points;\n}",
        "tags": [
            "scope",
            "shadowing",
            "variables"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The Temporal Dead Zone (let)",
        "problemId": 129,
        "slug": "temporal-dead-zone-let",
        "description": "Variables declared with `let` and `const` are hoisted, but they cannot be accessed before their declaration line. This 'danger zone' is called the Temporal Dead Zone (TDZ).\n\nCreate a function `testTDZ`. Inside it, on line 1, return a variable named `x`. On line 2, declare `let x = 10`.\n\nWait: The code **will crash** when executed! This is exactly what we want to demonstrate.\n\nConstraints:\n- You must return `x` before its declaration.\n- Use `let` or `const`.\n\nFollow-up: Why did JavaScript designers create the TDZ? (Hint: To prevent developers from using variables before they are initialized!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "testTDZ()",
                "output": "ReferenceError",
                "explanation": "Accessing block-scoped variables before declaration is illegal.",
                "_id": "69bb08211b6d63bc980859dc"
            }
        ],
        "constraints": [
            "Return occurs before let declaration",
            "Must trigger ReferenceError"
        ],
        "hints": [
            "Hint 1: `function testTDZ() { return x; let x = 5; }`"
        ],
        "starterCode": "function testTDZ() {\n  // Return x here\n  // let x here\n}\n",
        "testCases": [
            {
                "input": "testTDZ()",
                "expected": "throws ReferenceError",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859dd"
            }
        ],
        "solutionCode": "function testTDZ() {\n  return x;\n  let x = 10;\n}",
        "tags": [
            "hoisting",
            "tdz",
            "let"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Var Hoisting Behavior",
        "problemId": 130,
        "slug": "var-hoisting-behavior",
        "description": "Unlike `let`, variables declared with `var` are initialized as `undefined` when hoisted. They do NOT crash, but they give the wrong result!\n\nCreate a function `testVarHoisting`. On line 1, return the variable `val`. On line 2, declare `var val = 'hoisted'`;\n\nExample 1:\nInput: testVarHoisting()\nOutput: undefined\n\nConstraints:\n- Use `var` keyword.\n- Return the variable before its line of assignment.\n\nFollow-up: Why is this one of the main reasons modern developers avoid using `var`?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "testVarHoisting()",
                "output": "undefined",
                "explanation": "Legacy var keyword initializes to undefined during the creation phase of execution.",
                "_id": "69bb08211b6d63bc980859df"
            }
        ],
        "constraints": [
            "Must use var",
            "Must return undefined result"
        ],
        "hints": [
            "Hint 1: `function testVarHoisting() { return v; var v = 1; }`"
        ],
        "starterCode": "function testVarHoisting() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "testVarHoisting()",
                "expected": "returns undefined",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859e0"
            }
        ],
        "solutionCode": "function testVarHoisting() {\n  return val;\n  var val = 'hoisted';\n}",
        "tags": [
            "hoisting",
            "var",
            "undefined"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Function Declaration Hoisting",
        "problemId": 131,
        "slug": "function-declaration-hoisting",
        "description": "Standard function declarations (e.g. `function x() {}`) are fully hoisted. This means you can call them BEFORE they are defined in the file!\n\nCreate a function `testHoistedCall`. Inside it, call a function named `greet()` on line 1, and then define `function greet() { return 'hi'; }` on line 2.\n\nExample 1:\nInput: testHoistedCall()\nOutput: 'hi'\n\nConstraints:\n- Call the function before its definition.\n\nFollow-up: Does this work for function expressions (e.g. `const x = function() {}`)? (Hint: No, they behave like `let/const`!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "testHoistedCall()",
                "output": "'hi'",
                "explanation": "Function declarations are moved to the top of their scope during compilation.",
                "_id": "69bb08211b6d63bc980859e2"
            }
        ],
        "constraints": [
            "Must call function on line 1",
            "Must declare function on line 2"
        ],
        "hints": [
            "Hint 1: `function test() { return sub(); function sub() { return 'ok'; } }`"
        ],
        "starterCode": "function testHoistedCall() {\n  // call greet() here\n  // define greet here\n}\n",
        "testCases": [
            {
                "input": "testHoistedCall()",
                "expected": "returns 'hi'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859e3"
            }
        ],
        "solutionCode": "function testHoistedCall() {\n  return greet();\n  function greet() {\n    return 'hi';\n  }\n}",
        "tags": [
            "hoisting",
            "functions",
            "execution-context"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Block Scope (if statements)",
        "problemId": 132,
        "slug": "block-scope-if-statements",
        "description": "Variables declared with `let` and `const` inside an `if` block are trapped inside that block. This is called 'Block Scope'.\n\nCreate a function `checkBlockScope`. Inside it, declare an `if (true)` block. Inside the block, declare `const x = 10`. Outside the block (but still in the function), return `x`.\n\nWait: This will fail! You must handle the error. For the purpose of this challenge, just return the string `'ReferenceError'` if you think the variable is unreachable.\n\nActually, let's keep it simple: Write a function that declares `let x = 1` inside an `if` block, then return `x` outside it. If it throws a `ReferenceError`, return that string.\n\nConstraints:\n- Demonstrate that x is not defined outside the if block.\n\nFollow-up: How is `var` different in this scenario? (Hint: `var` ignores blocks and is only scoped to functions!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "checkBlockScope()",
                "output": "ReferenceError",
                "explanation": "Block-scoped variables (let/const) are inaccessible from outer boundaries.",
                "_id": "69bb08211b6d63bc980859e5"
            }
        ],
        "constraints": [
            "Must use block-scoped let/const",
            "Variable must be declared inside block"
        ],
        "hints": [
            "Hint 1: `if(true) { let x = 5; } return x; // Error!`"
        ],
        "starterCode": "function checkBlockScope() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "checkBlockScope()",
                "expected": "throws ReferenceError",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859e6"
            }
        ],
        "solutionCode": "function checkBlockScope() {\n  if (true) {\n    let x = 10;\n  }\n  return x;\n}",
        "tags": [
            "scope",
            "block-scope",
            "let"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Global Object (window/global)",
        "problemId": 133,
        "slug": "global-object-window-global",
        "description": "In browsers, global variables declared with `var` are added to the `window` object. Variables declared with `let/const` are NOT.\n\nCreate a function `isGlobal` that checks if a variable named `myVar` exists on the `window` object. (In this environment, you can use `globalThis` instead of `window`).\n\nDeclare `var myVar = 'test'` globally. Then return `globalThis.hasOwnProperty('myVar')` inside the function.\n\nExample 1:\nInput: isGlobal()\nOutput: true\n\nConstraints:\n- Use `var` for the global variable.\n- Return boolean.\n\nFollow-up: Why is it risky to pollute the global object with variables?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "isGlobal()",
                "output": "true",
                "explanation": "Var declarations attach to the global object, while block-scoping keywords do not.",
                "_id": "69bb08211b6d63bc980859e8"
            }
        ],
        "constraints": [
            "Must use var keyword globally",
            "Check globalThis property"
        ],
        "hints": [
            "Hint 1: `var x = 1; globalThis.x // 1`"
        ],
        "starterCode": "var myVar = 'test';\nfunction isGlobal() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "isGlobal()",
                "expected": "returns true",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859e9"
            }
        ],
        "solutionCode": "var myVar = 'test';\nfunction isGlobal() {\n  return globalThis.hasOwnProperty('myVar');\n}",
        "tags": [
            "scope",
            "global-object",
            "var"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Topic 12: Intro to Closures",
        "problemId": 134,
        "slug": "intro-to-closures",
        "description": "Topic 12: Closures. A closure is a function that 'remembers' the variables from its outer scope even after the outer function has finished executing.\n\nCreate a function `outer`. Inside it, declare `let counter = 0`. Return a nested function that adds `1` to `counter` and returns it.\n\nExample 1:\nInput: `const func = outer(); func(); func();` \nOutput: 2\n\nConstraints:\n- Must return a function from another function.\n- Inner function must access the outer variable.\n\nFollow-up: Why is this one of JS's most powerful features? (Hint: Data privacy!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "closure()",
                "output": "function",
                "explanation": "Functions capturing lexical state for persistent execution context.",
                "_id": "69bb08211b6d63bc980859eb"
            }
        ],
        "constraints": [
            "Must return function",
            "Variable must persist between calls"
        ],
        "hints": [
            "Hint 1: `function outer() { let c = 0; return function() { c++; return c; } }`"
        ],
        "starterCode": "function outer() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "execution check",
                "expected": "calling the returned function twice returns 2",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859ec"
            }
        ],
        "solutionCode": "function outer() {\n  let counter = 0;\n  return function() {\n    counter++;\n    return counter;\n  };\n}",
        "tags": [
            "closures",
            "functions",
            "scope"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Private Variable Storage",
        "problemId": 135,
        "slug": "private-variable-storage",
        "description": "Closures allow you to create 'private' variables that cannot be accessed directly from the outside.\n\nCreate a function `createVault(secret)`. It should return an object with one method: `getSecret()`. This method should return the `secret` passed to the outer function.\n\nExample 1:\nInput: `const vault = createVault('my-password'); vault.getSecret();` \nOutput: 'my-password'\n\nConstraints:\n- The `secret` variable must NOT be a property of the object (it must be hidden in the closure).\n\nFollow-up: Can someone change the secret variable if you don't provide a setter method?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Vault('abc').getSecret()",
                "output": "'abc'",
                "explanation": "Encapsulating state within a local scope that persists via function pointers.",
                "_id": "69bb08211b6d63bc980859ee"
            }
        ],
        "constraints": [
            "Secret must not be on return object",
            "Method must correctly retrieve closure value"
        ],
        "hints": [
            "Hint 1: `function createVault(s) { return { getSecret: () => s }; }`"
        ],
        "starterCode": "function createVault(secret) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createVault('top-secret').getSecret()",
                "expected": "returns 'top-secret'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859ef"
            }
        ],
        "solutionCode": "function createVault(secret) {\n  return {\n    getSecret: function() {\n      return secret;\n    }\n  };\n}",
        "tags": [
            "closures",
            "encapsulation",
            "privacy"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Function Factory",
        "problemId": 136,
        "slug": "function-factory-closures",
        "description": "You can use closures to create multiple functions that do the same thing but with different 'preset' values.\n\nCreate a function `makeMultiplier(factor)`. It should return a new function that takes a number `n` and returns `n * factor`.\n\nExample 1:\nInput: `const double = makeMultiplier(2); double(5);` \nOutput: 10\n\nExample 2:\nInput: `const triple = makeMultiplier(3); triple(5);` \nOutput: 15\n\nConstraints:\n- Must return a function.\n- Inner function must use the `factor` parameter.\n\nFollow-up: How many different 'multiplier' functions can you create from this one factory?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Multiplier(10)(5)",
                "output": "50",
                "explanation": "Partial application of logic via parameter persistence in closures.",
                "_id": "69bb08211b6d63bc980859f1"
            }
        ],
        "constraints": [
            "Must utilize outer parameter",
            "Return functional result"
        ],
        "hints": [
            "Hint 1: `return function(n) { return n * factor; }`"
        ],
        "starterCode": "function makeMultiplier(factor) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "makeMultiplier(5)(2)",
                "expected": "returns 10",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859f2"
            }
        ],
        "solutionCode": "function makeMultiplier(factor) {\n  return function(n) {\n    return n * factor;\n  };\n}",
        "tags": [
            "closures",
            "functional-programming",
            "factory"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "The Adder Generator",
        "problemId": 137,
        "slug": "the-adder-generator",
        "description": "Like the multiplier, create a function `makeAdder(x)`. It returns a function that takes `y` and returns `x + y`.\n\nExample 1:\nInput: `const addTen = makeAdder(10); addTen(5);` \nOutput: 15\n\nConstraints:\n- Function name: `makeAdder`.\n- Use parameters correctly.\n\nFollow-up: What is 'Currying' in JavaScript? (Hint: Transforming a function with multiple arguments into a series of functions!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Adder(5)(5)",
                "output": "10",
                "explanation": "Simple arithmetic persistence via higher-order functions.",
                "_id": "69bb08211b6d63bc980859f4"
            }
        ],
        "constraints": [
            "Return function correctly",
            "Capture outer scope 'x'"
        ],
        "hints": [
            "Hint 1: `return function(y) { return x + y; }`"
        ],
        "starterCode": "function makeAdder(x) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "makeAdder(20)(22)",
                "expected": "returns 42",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859f5"
            }
        ],
        "solutionCode": "function makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}",
        "tags": [
            "closures",
            "math",
            "currying"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Stateful Greeter",
        "problemId": 138,
        "slug": "stateful-greeter-closure",
        "description": "Create a function `createGreeter(greeting)`. It returns a function that takes a `name` and returns the string: `${greeting}, ${name}!`.\n\nExample 1:\nInput: `const hi = createGreeter('Hi'); hi('Shiv');` \nOutput: 'Hi, Shiv!'\n\nConstraints:\n- Use template literals.\n- Must return a function.\n\nFollow-up: How is this better than always typing 'Hi, Shiv!' manually?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Greeter('Hello')('Ansh')",
                "output": "'Hello, Ansh!'",
                "explanation": "Dynamic string construction based on localized persistent state.",
                "_id": "69bb08211b6d63bc980859f7"
            }
        ],
        "constraints": [
            "Correct comma/punctuation",
            "Functional return required"
        ],
        "hints": [
            "Hint 1: `return function(name) { return `${greeting}, ${name}!`; }`"
        ],
        "starterCode": "function createGreeter(greeting) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createGreeter('Welcome')('Student')",
                "expected": "returns 'Welcome, Student!'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859f8"
            }
        ],
        "solutionCode": "function createGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}",
        "tags": [
            "closures",
            "strings",
            "factory"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "One-Time Function (Once)",
        "problemId": 139,
        "slug": "one-time-function-once",
        "description": "Create a function `once(fn)`. It returns a new function that can only be called ONCE. Any subsequent calls should return the result of the first call.\n\nExample 1:\nInput: `const launch = once(() => 'Launched!'); launch(); launch();` \nOutput: 'Launched!' (The second call just returns the same result).\n\nConstraints:\n- Use a boolean flag `isCalled` inside the closure.\n- Store the `result` from the first call inside the closure.\n\nFollow-up: Why is this pattern useful for expensive operations like API calls or database connections?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "once(fn)() twice",
                "output": "same result",
                "explanation": "Idempotent execution management via closure-persisted flags.",
                "_id": "69bb08211b6d63bc980859fa"
            }
        ],
        "constraints": [
            "Must only execute input function once",
            "Must return first call result forever"
        ],
        "hints": [
            "Hint 1: `let called = false; let res; return function() { if(!called) { res = fn(); called = true; } return res; }`"
        ],
        "starterCode": "function once(fn) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "check call count",
                "expected": "the input function is only executed once",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859fb"
            }
        ],
        "solutionCode": "function once(fn) {\n  let isCalled = false;\n  let result;\n  return function() {\n    if (!isCalled) {\n      result = fn();\n      isCalled = true;\n    }\n    return result;\n  };\n}",
        "tags": [
            "closures",
            "idempotency",
            "optimization"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Compose Greeting and Name",
        "problemId": 140,
        "slug": "compose-greeting-and-name",
        "description": "Create a function `getFormatter(prefix)`. It returns a function that takes a `message` and returns the `prefix` + `message`.\n\nUse this to create a variable `errorLogger = getFormatter('ERROR: ')` and `infoLogger = getFormatter('INFO: ')`.\n\nExample 1:\nInput: errorLogger('File missing')\nOutput: 'ERROR: File missing'\n\nConstraints:\n- Name the factory function `getFormatter`.\n- Use it to create both loggers.\n\nFollow-up: How does this make log management easier in a large application?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "getFormatter('! ')('msg')",
                "output": "'! msg'",
                "explanation": "Prepending categorization labels via persistent local variables.",
                "_id": "69bb08211b6d63bc980859fd"
            }
        ],
        "constraints": [
            "Must return function",
            "Correct concatenation"
        ],
        "hints": [
            "Hint 1: `return function(msg) { return prefix + msg; }`"
        ],
        "starterCode": "function getFormatter(prefix) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getFormatter('LOG: ')('Saved')",
                "expected": "returns 'LOG: Saved'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc980859fe"
            }
        ],
        "solutionCode": "function getFormatter(prefix) {\n  return function(message) {\n    return prefix + message;\n  };\n}",
        "tags": [
            "closures",
            "logging",
            "formatting"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Basic Memoization (Closure)",
        "problemId": 141,
        "slug": "basic-memoization-closure",
        "description": "Memoization is an optimization technique where you store the results of expensive function calls and return the cached result when the same inputs occur again.\n\nCreate a function `createSquareCache()`. It returns a function that takes a number `n`. If `n` has been calculated before, return the cached result. Otherwise, calculate `n * n`, store it, and return it.\n\nExample 1:\nInput: `const sq = createSquareCache(); sq(2); sq(2);` \nOutput: 4 (The second call should fetch from cache).\n\nConstraints:\n- Use an object `cache` inside the closure.\n- Function name: `createSquareCache`.\n\nFollow-up: Why is this extremely useful for complex mathematical algorithms like Fibonacci?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "createSquareCache()(5)",
                "output": "25",
                "explanation": "Caching execution results within a persistent hash map to avoid redundant calculations.",
                "_id": "69bb08211b6d63bc98085a00"
            }
        ],
        "constraints": [
            "Must use internal cache object",
            "Correct return value"
        ],
        "hints": [
            "Hint 1: `let cache = {}; return function(n) { if (cache[n]) return cache[n]; ... }`"
        ],
        "starterCode": "function createSquareCache() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "check cache persistence",
                "expected": "second call returns identical result without re-calculation",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a01"
            }
        ],
        "solutionCode": "function createSquareCache() {\n  const cache = {};\n  return function(n) {\n    if (n in cache) {\n      return cache[n];\n    }\n    const result = n * n;\n    cache[n] = result;\n    return result;\n  };\n}",
        "tags": [
            "closures",
            "optimization",
            "memoization"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Persistent ID Generator",
        "problemId": 142,
        "slug": "persistent-id-generator",
        "description": "Create a function `createIdGenerator(prefix)`. It should return a function that, every time it is called, returns a new ID string in the format: `prefix-count` where count starts at 1 and increments on every call.\n\nExample 1:\nInput: `const nextId = createIdGenerator('user'); nextId(); nextId();` \nOutput: 'user-2'\n\nConstraints:\n- Must maintain a counter in the closure.\n- Prefix should be dynamic based on the outer parameter.\n\nFollow-up: How does this help in keeping unique keys for elements in a database or UI list?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Generator('item')()",
                "output": "'item-1'",
                "explanation": "Managing global sequences via localized functional state.",
                "_id": "69bb08211b6d63bc98085a03"
            }
        ],
        "constraints": [
            "Must correctly increment counter",
            "Correct string formatting"
        ],
        "hints": [
            "Hint 1: `let count = 0; return () => `${prefix}-${++count}`;`"
        ],
        "starterCode": "function createIdGenerator(prefix) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createIdGenerator('id')() twice",
                "expected": "returns 'id-2'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a04"
            }
        ],
        "solutionCode": "function createIdGenerator(prefix) {\n  let count = 0;\n  return function() {\n    count++;\n    return `${prefix}-${count}`;\n  };\n}",
        "tags": [
            "closures",
            "factory",
            "strings"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Toggle Boolean Logic",
        "problemId": 143,
        "slug": "toggle-boolean-logic-closure",
        "description": "Create a function `createToggler(initialValue)`. It returns a function that, when called, flips the boolean `initialValue` and returns the NEW value.\n\nExample 1:\nInput: `const toggle = createToggler(true); toggle(); toggle();` \nOutput: true (First call makes it false, second call makes it true again).\n\nConstraints:\n- Function name: `createToggler`.\n- Logic: `!currentValue`.\n\nFollow-up: Where would you use this in a web app? (Hint: Show/Hide sidebars, Light/Dark mode buttons!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Toggler(false)()",
                "output": "true",
                "explanation": "Inverting localized state on every functional execution.",
                "_id": "69bb08211b6d63bc98085a06"
            }
        ],
        "constraints": [
            "Correct boolean inversion",
            "Persistent state"
        ],
        "hints": [
            "Hint 1: `let state = initialValue; return () => { state = !state; return state; };`"
        ],
        "starterCode": "function createToggler(initialValue) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createToggler(true)()",
                "expected": "returns false",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a07"
            }
        ],
        "solutionCode": "function createToggler(initialValue) {\n  let val = initialValue;\n  return function() {\n    val = !val;\n    return val;\n  };\n}",
        "tags": [
            "closures",
            "logic",
            "toggle"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Limit Call Count",
        "problemId": 144,
        "slug": "limit-call-count",
        "description": "Create a function `limitCalls(fn, max)`. It returns a function that can only call `fn` a maximum of `max` times. After the limit is reached, it should return `'Limit reached'`.\n\nExample 1:\nInput: `const limited = limitCalls(() => 'hi', 2); limited(); limited(); limited();` \nOutput: 'Limit reached' (on the third call).\n\nConstraints:\n- Closure must track the number of calls.\n- Correct string return on overflow.\n\nFollow-up: How does this help in preventing 'spam' clicks on a Form Submit button?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "limitCalls(fn, 1)()",
                "output": "result",
                "explanation": "Enforcing execution thresholds via persistent local state.",
                "_id": "69bb08211b6d63bc98085a09"
            }
        ],
        "constraints": [
            "Correct count tracking",
            "Exact string match for limit warning"
        ],
        "hints": [
            "Hint 1: `let count = 0; if (count < max) return fn();`"
        ],
        "starterCode": "function limitCalls(fn, max) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "exceed limit",
                "expected": "returns 'Limit reached'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a0a"
            }
        ],
        "solutionCode": "function limitCalls(fn, max) {\n  let count = 0;\n  return function() {\n    if (count < max) {\n      count++;\n      return fn();\n    }\n    return 'Limit reached';\n  };\n}",
        "tags": [
            "closures",
            "security",
            "logic"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Delayed Execution Logger",
        "problemId": 145,
        "slug": "delayed-execution-logger",
        "description": "Create a function `createDelayedLog(message)`. It should return a function that, when called, return a string: `'Wait for it... ' + message`.\n\nExample 1:\nInput: `const logger = createDelayedLog('Hello'); logger();` \nOutput: 'Wait for it... Hello'\n\nConstraints:\n- Ensure the prefix is exactly `'Wait for it... '`.\n\nFollow-up: If we added `setTimeout` here, we could actually delay the print to the console. Why are closures essential for `setTimeout` callbacks?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "DelayedLog('Done')()",
                "output": "'Wait for it... Done'",
                "explanation": "Buffering static information for future functional invocation.",
                "_id": "69bb08211b6d63bc98085a0c"
            }
        ],
        "constraints": [
            "Return correctly concatenated string"
        ],
        "hints": [
            "Hint 1: `return () => 'Wait for it... ' + message;`"
        ],
        "starterCode": "function createDelayedLog(message) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "createDelayedLog('Hi')()",
                "expected": "returns 'Wait for it... Hi'",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a0d"
            }
        ],
        "solutionCode": "function createDelayedLog(message) {\n  return function() {\n    return 'Wait for it... ' + message;\n  };\n}",
        "tags": [
            "closures",
            "strings",
            "buffering"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Variable Scope Shadowing (let vs var)",
        "problemId": 146,
        "slug": "shadowing-let-vs-var",
        "description": "Topic 11 Mixed. In a `for` loop, `var` is NOT block-scoped, but `let` IS. This affects how closures inside the loop behave!\n\nCreate a function `testLoopScope`. Use a `for` loop to create an array of 2 functions. If you use `let i`, every function should return its own index (0 then 1). If you use `var i`, they both return the final value (2).\n\nConstraints:\n- Use `let i` inside your loop.\n- Return the array of functions.\n\nExample 1:\nInput: `const funcs = testLoopScope(); funcs[0]();` \nOutput: 0\n\nFollow-up: Why does `var` cause both functions to return 2? (Hint: Because they all point to the same global `i`!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "testLoopScope()[0]()",
                "output": "0",
                "explanation": "Leveraging block-scoping to isolate iterative state in closures.",
                "_id": "69bb08211b6d63bc98085a0f"
            }
        ],
        "constraints": [
            "Must use let for block scope",
            "Return array of functions"
        ],
        "hints": [
            "Hint 1: `let arrs = []; for(let i=0; i<2; i++) { arrs.push(() => i); } return arrs;`"
        ],
        "starterCode": "function testLoopScope() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "testLoopScope()[1]()",
                "expected": "returns 1",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a10"
            }
        ],
        "solutionCode": "function testLoopScope() {\n  const funcs = [];\n  for (let i = 0; i < 2; i++) {\n    funcs.push(function() {\n      return i;\n    });\n  }\n  return funcs;\n}",
        "tags": [
            "scope",
            "closures",
            "loops"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Check Nested Scope",
        "problemId": 147,
        "slug": "check-nested-scope",
        "description": "JavaScript uses 'Lexical Scoping', meaning nested functions have access to variables in their parent scope AND all grandparent scopes.\n\nCreate three levels: `grandparent` function has `const a = 1`. `parent` has `const b = 2`. `child` returns `a + b + c` where `c` is passed to `child`.\n\nReturn the result of `grandparent(5)` where 5 is the value for `c`.\n\nExample 1:\nInput: N/A\nOutput: 8\n\nConstraints:\n- Nest the functions correctly.\n- Correct arithmetic total.\n\nFollow-up: Does the grandparent have access to the child's variables? (Hint: No, scope only goes UP, never down!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Scope & Hoisting",
        "topicOrder": 11,
        "examples": [
            {
                "input": "N/A",
                "output": "8",
                "explanation": "Traversing the scope chain to resolve variable identifiers.",
                "_id": "69bb08211b6d63bc98085a12"
            }
        ],
        "constraints": [
            "Correct functional nesting",
            "Correct sum output"
        ],
        "hints": [
            "Hint 1: `function grand() { let a = 1; function parent(c) { let b = 2; return a + b + c; } return parent; }`"
        ],
        "starterCode": "function levelCheck(cValue) {\n  // Nest functions here\n}\n",
        "testCases": [
            {
                "input": "levelCheck(10)",
                "expected": "returns 13",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a13"
            }
        ],
        "solutionCode": "function levelCheck(cValue) {\n  const a = 1;\n  function parent() {\n    const b = 2;\n    function child() {\n      return a + b + cValue;\n    }\n    return child();\n  }\n  return parent();\n}",
        "tags": [
            "scope",
            "lexical-scoping",
            "nesting"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Resetting Counter Closure",
        "problemId": 148,
        "slug": "resetting-counter-closure",
        "description": "Create a function `createManageableCounter()`. It should return an object with two methods:\n1. `inc()`: Increments the count and returns the new value.\n2. `reset()`: Resets the count to 0.\n\nExample 1:\nInput: `const c = createManageableCounter(); c.inc(); c.inc(); c.reset(); c.inc();` \nOutput: 1 (after reset).\n\nConstraints:\n- Must share the SAME counter variable between both methods via closure.\n\nFollow-up: How do multiple methods manage to 'see' the same variable?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Closures",
        "topicOrder": 12,
        "examples": [
            {
                "input": "Counter().inc(), Counter().reset()",
                "output": "1, undefined",
                "explanation": "Shared mutable state among multiple sibling functional closures.",
                "_id": "69bb08211b6d63bc98085a15"
            }
        ],
        "constraints": [
            "Correct shared variable reference",
            "Proper object return format"
        ],
        "hints": [
            "Hint 1: `let count = 0; return { inc: () => ++count, reset: () => count = 0 };`"
        ],
        "starterCode": "function createManageableCounter() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "check reset logic",
                "expected": "can increment, reset, and start over correctly",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a16"
            }
        ],
        "solutionCode": "function createManageableCounter() {\n  let count = 0;\n  return {\n    inc: function() {\n      count++;\n      return count;\n    },\n    reset: function() {\n      count = 0;\n    }\n  };\n}",
        "tags": [
            "closures",
            "state-management",
            "objects"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Function as Argument (Callback Intro)",
        "problemId": 149,
        "slug": "function-as-argument-callback",
        "description": "In JS, functions are 'First-Class Citizens'. You can pass them into other functions just like numbers or strings!\n\nCreate a function `execute` that takes a function `fn` and a value `x`. Return the result of calling `fn(x)`.\n\nExample 1:\nInput: `(n) => n * 2`, 5\nOutput: 10\n\nConstraints:\n- Call the parameter function correctly.\n\nFollow-up: Why are callbacks essential for things like clicking buttons or fetching data from a server?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "execute(num => num + 1, 9)",
                "output": "10",
                "explanation": "Injecting logic behaviors as functional parameters.",
                "_id": "69bb08211b6d63bc98085a18"
            }
        ],
        "constraints": [
            "Correct functional invocation",
            "Handle parameters properly"
        ],
        "hints": [
            "Hint 1: `return fn(x);`"
        ],
        "starterCode": "function execute(fn, x) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "execute(s => s.length, 'hi')",
                "expected": "returns 2",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a19"
            }
        ],
        "solutionCode": "function execute(fn, x) {\n  return fn(x);\n}",
        "tags": [
            "functions",
            "callbacks",
            "higher-order"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "title": "Functional Composition (Add One then Double)",
        "problemId": 150,
        "slug": "functional-composition-basic",
        "description": "Composition is the process of combining two or more functions to produce a new function.\n\nCreate a function `compose` that takes a number `n`. It should first add `1` to `n`, and then multiply the result by `2`. Return the final value.\n\nExample 1:\nInput: 5\nOutput: 12\n\nConstraints:\n- Logic: `(n + 1) * 2`.\n\nFollow-up: How would you write this using separate functions `addOne` and `double`? (Hint: `double(addOne(n))`)!",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "compose(1)",
                "output": "4",
                "explanation": "Sequencing operations into a consolidated logic flow.",
                "_id": "69bb08211b6d63bc98085a1b"
            }
        ],
        "constraints": [
            "Correct precedence (addition first)",
            "Correct final result"
        ],
        "hints": [
            "Hint 1: `return (n + 1) * 2;`"
        ],
        "starterCode": "function compose(n) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "compose(10)",
                "expected": "returns 22",
                "isHidden": false,
                "_id": "69bb08211b6d63bc98085a1c"
            }
        ],
        "solutionCode": "function compose(n) {\n  let temp = n + 1;\n  return temp * 2;\n}",
        "tags": [
            "functions",
            "logic",
            "composition"
        ],
        "companies": [],
        "acceptanceRate": 0,
        "totalAttempts": 0,
        "totalAccepted": 0,
        "isPremium": false
    },
    {
        "problemId": 151,
        "title": "Topic 8: Simple Reduce (Summing)",
        "slug": "simple-reduce-summing",
        "description": "Topic 8: Higher Order Functions. The `.reduce()` method executes a reducer function on each element of the array, resulting in a SINGLE output value.\n\nCreate a function `sumAll` that takes an array of numbers. Use `.reduce()` to return the total sum of all numbers.\n\nExample 1:\nInput: [1, 2, 3, 4]\nOutput: 10\n\nConstraints:\n- Must use `.reduce()`.\n- Provide an initial value of `0` to the accumulator.\n\nFollow-up: What happens if you forget to provide an initial value `0`? (Hint: It uses the first element of the array as the accumulator!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "sumAll([5, 5])",
                "output": "10",
                "explanation": "Aggregating a collection into a single numerical scalar."
            }
        ],
        "constraints": [
            "Must use .reduce()",
            "Initial value 0 required"
        ],
        "hints": [
            "Hint 1: `return arr.reduce((acc, curr) => acc + curr, 0);`"
        ],
        "starterCode": "function sumAll(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "sumAll([10, 20, 30])",
                "expected": "returns 60",
                "isHidden": false
            }
        ],
        "solutionCode": "function sumAll(arr) {\n  return arr.reduce((acc, curr) => acc + curr, 0);\n}",
        "tags": [
            "HOF",
            "reduce",
            "math"
        ]
    },
    {
        "problemId": 152,
        "title": "Reduce to Object (Counting)",
        "slug": "reduce-to-object-counting",
        "description": "`.reduce()` isn't just for numbers! You can use it to build an object based on the array contents.\n\nCreate a function `countWords` that takes an array of strings. Return an object where the keys are the words and the values are the number of times that word appears.\n\nExample 1:\nInput: ['apple', 'banana', 'apple']\nOutput: { apple: 2, banana: 1 }\n\nConstraints:\n- Must use `.reduce()`.\n- Initial value: `{}`.\n\nFollow-up: How is this performant compared to using a `for` loop? (Hint: It's logically the same, but much cleaner syntax!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "countWords(['a', 'a'])",
                "output": "{a: 2}",
                "explanation": "Mapping frequency distributions into a hash map via reduction."
            }
        ],
        "constraints": [
            "Must use .reduce()",
            "Initial value {} required"
        ],
        "hints": [
            "Hint 1: `arr.reduce((acc, word) => { acc[word] = (acc[word] || 0) + 1; return acc; }, {});`"
        ],
        "starterCode": "function countWords(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "countWords(['hi', 'hi', 'bye'])",
                "expected": "returns {hi: 2, bye: 1}",
                "isHidden": false
            }
        ],
        "solutionCode": "function countWords(arr) {\n  return arr.reduce((acc, word) => {\n    acc[word] = (acc[word] || 0) + 1;\n    return acc;\n  }, {});\n}",
        "tags": [
            "HOF",
            "reduce",
            "objects"
        ]
    },
    {
        "problemId": 153,
        "title": "Flatten a 2D Array",
        "slug": "flatten-a-2d-array-reduce",
        "description": "You can use `.reduce()` to combine multiple sub-arrays into one single flat array.\n\nCreate a function `flatten` that takes an array of arrays (e.g., `[[1, 2], [3], [4, 5]]`) and returns `[1, 2, 3, 4, 5]`.\n\nExample 1:\nInput: [[1], [2, 3]]\nOutput: [1, 2, 3]\n\nConstraints:\n- Must use `.reduce()`.\n- Initial value: `[]`.\n- Use `.concat()` inside the reducer.\n\nFollow-up: In modern JS, what's a faster way to do this? (Hint: `.flat()`)!",
        "difficulty": "Medium",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "flatten([[10], [5]])",
                "output": "[10, 5]",
                "explanation": "Decoupling nested structures into a linear sequence."
            }
        ],
        "constraints": [
            "Must use .reduce()",
            "Correct concatenation"
        ],
        "hints": [
            "Hint 1: `arr.reduce((acc, sub) => acc.concat(sub), []);`"
        ],
        "starterCode": "function flatten(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "flatten([[1, 2], [3]])",
                "expected": "returns [1, 2, 3]",
                "isHidden": false
            }
        ],
        "solutionCode": "function flatten(arr) {\n  return arr.reduce((acc, val) => acc.concat(val), []);\n}",
        "tags": [
            "HOF",
            "reduce",
            "arrays"
        ]
    },
    {
        "problemId": 154,
        "title": "Group by First Letter",
        "slug": "group-by-first-letter-reduce",
        "description": "A more advanced data transformation. Create a function `groupByLetter` that takes an array of words. Return an object where keys are first letters and values are arrays of words starting with that letter.\n\nExample 1:\nInput: ['apple', 'apricot', 'banana']\nOutput: { a: ['apple', 'apricot'], b: ['banana'] }\n\nConstraints:\n- Use `.reduce()` and initialize with `{}`.\n\nFollow-up: How do you handle case sensitivity (A vs a)?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "groupByLetter(['car', 'cat'])",
                "output": "{c: ['car', 'cat']}",
                "explanation": "Partitioning a dataset into categorized subsets via property indexing."
            }
        ],
        "constraints": [
            "Must return object of arrays",
            "Correct letter extraction"
        ],
        "hints": [
            "Hint 1: `const letter = word[0]; if(!acc[letter]) acc[letter] = []; acc[letter].push(word); return acc;`"
        ],
        "starterCode": "function groupByLetter(words) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "groupByLetter(['hi', 'hello', 'bye'])",
                "expected": "returns {h: ['hi', 'hello'], b: ['bye']}",
                "isHidden": false
            }
        ],
        "solutionCode": "function groupByLetter(words) {\n  return words.reduce((acc, word) => {\n    const first = word[0];\n    if (!acc[first]) acc[first] = [];\n    acc[first].push(word);\n    return acc;\n  }, {});\n}",
        "tags": [
            "HOF",
            "reduce",
            "grouping"
        ]
    },
    {
        "problemId": 155,
        "title": "Find Max using Reduce",
        "slug": "find-max-using-reduce",
        "description": "Show you understand the accumulator! You can use `.reduce()` to keep track of a 'winner' as you loop.\n\nCreate a function `maxNum` that takes an array of numbers and returns the largest one.\n\nExample 1:\nInput: [1, 5, 2, 8, 3]\nOutput: 8\n\nConstraints:\n- Must use `.reduce()`.\n- Ensure it works for negative numbers too!\n\nFollow-up: What should the initial value be to handle negatives correctly? (Hint: The first element or `-Infinity`!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "maxNum([-1, -10])",
                "output": "-1",
                "explanation": "Performing a linear comparison search within the bounds of a reducer."
            }
        ],
        "constraints": [
            "Must use .reduce()",
            "Correct logic for peak value"
        ],
        "hints": [
            "Hint 1: `return arr.reduce((max, n) => n > max ? n : max, arr[0]);`"
        ],
        "starterCode": "function maxNum(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "maxNum([1, 10, 5])",
                "expected": "returns 10",
                "isHidden": false
            }
        ],
        "solutionCode": "function maxNum(arr) {\n  if (arr.length === 0) return null;\n  return arr.reduce((max, current) => {\n    return current > max ? current : max;\n  }, arr[0]);\n}",
        "tags": [
            "HOF",
            "reduce",
            "math"
        ]
    },
    {
        "problemId": 156,
        "title": "Topic 23: Destructure with Rest",
        "slug": "destructure-with-rest-array",
        "description": "Topic 23: ES6+ Features. The 'Rest' parameter `...` can collect the REMAINING items of an array into a new variable.\n\nCreate a function `splitArray` that takes an array. Use destructuring to extract the first item into `first` and all other items into an array named `others`. Return an object `{ first, others }`.\n\nExample 1:\nInput: [1, 2, 3, 4]\nOutput: { first: 1, others: [2, 3, 4] }\n\nConstraints:\n- Must use `const [first, ...others] = arr;` logic.\n\nFollow-up: What happens to `others` if the array only has one item? (Hint: It becomes an empty array `[]`!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "ES6+ Features",
        "topicOrder": 23,
        "examples": [
            {
                "input": "splitArray([10])",
                "output": "{first: 10, others: []}",
                "explanation": "Isolating leading elements while gathering tail segments via spread syntax."
            }
        ],
        "constraints": [
            "Must use rest parameter in destructuring",
            "Return specific object structure"
        ],
        "hints": [
            "Hint 1: `const [first, ...others] = arr; return { first, others };`"
        ],
        "starterCode": "function splitArray(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "splitArray(['a', 'b', 'c'])",
                "expected": "returns {first: 'a', others: ['b', 'c']}",
                "isHidden": false
            }
        ],
        "solutionCode": "function splitArray(arr) {\n  const [first, ...others] = arr;\n  return { first, others };\n}",
        "tags": [
            "ES6",
            "destructuring",
            "rest"
        ]
    },
    {
        "problemId": 157,
        "title": "Topic 8: Map with Index",
        "slug": "map-with-index-parameter",
        "description": "The `.map()` callback actually receives THREE arguments: the `value`, the `index`, and the `array` itself.\n\nCreate a function `indexMultiply` that takes an array of numbers. Use `.map()` to return a new array where each number is multiplied by its index.\n\nExample 1:\nInput: [10, 20, 30]\nOutput: [0, 20, 60] (Because 10*0, 20*1, 30*2)\n\nConstraints:\n- Must use the second argument of the `.map()` callback.\n\nFollow-up: Why is the index useful for things like generating unique keys in React or list rendering?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "High-Order Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "indexMultiply([1, 1, 1])",
                "output": "[0, 1, 2]",
                "explanation": "Leveraging positional metadata within iterative transformations."
            }
        ],
        "constraints": [
            "Must use (val, index) parameters",
            "Correct arithmetic result"
        ],
        "hints": [
            "Hint 1: `arr.map((val, index) => val * index);`"
        ],
        "starterCode": "function indexMultiply(arr) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "indexMultiply([5, 10])",
                "expected": "returns [0, 10]",
                "isHidden": false
            }
        ],
        "solutionCode": "function indexMultiply(arr) {\n  return arr.map((val, index) => val * index);\n}",
        "tags": [
            "HOF",
            "map",
            "index"
        ]
    },
    {
        "problemId": 158,
        "title": "Spread in Function Calls",
        "slug": "spread-in-function-calls",
        "description": "You can pass items of an array as separate arguments to a function using `...`.\n\nCreate a function `sumThree` that takes `a, b, c` and returns their sum. \nThen, given an array `const numbers = [10, 20, 30]`, return the result of calling `sumThree` with those numbers spread into it.\n\nExample 1:\nInput: [1, 2, 3]\nOutput: 6\n\nConstraints:\n- Call `sumThree(...numbers)`.\n\nFollow-up: How is this better than manually doing `sumThree(numbers[0], numbers[1], numbers[2])`?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "ES6+ Features",
        "topicOrder": 23,
        "examples": [
            {
                "input": "[2, 2, 2]",
                "output": "6",
                "explanation": "Unpacking iterative datasets into positional function parameters."
            }
        ],
        "constraints": [
            "Must use spread operator in call",
            "Return correctly summed total"
        ],
        "hints": [
            "Hint 1: `return sumThree(...numbers);`"
        ],
        "starterCode": "function sumThree(a, b, c) {\n  return a + b + c;\n}\n\nfunction testSpread(numbers) {\n  // call and return result here\n}\n",
        "testCases": [
            {
                "input": "testSpread([1, 1, 1])",
                "expected": "returns 3",
                "isHidden": false
            }
        ],
        "solutionCode": "function sumThree(a, b, c) {\n  return a + b + c;\n}\n\nfunction testSpread(numbers) {\n  return sumThree(...numbers);\n}",
        "tags": [
            "ES6",
            "spread",
            "functions"
        ]
    },
    {
        "problemId": 159,
        "title": "Template Literal Calculations",
        "slug": "template-literal-calculations",
        "description": "Template literals can perform math or logic inside `${}` block.\n\nCreate a function `getReceipt` that takes `item` and `price`. It should return the string: `'The price of ${item} is $${price}. With 10% tax: $${price * 1.1}'`.\n\nExample 1:\nInput: 'Book', 10\nOutput: 'The price of Book is $10. With 10% tax: $11'\n\nConstraints:\n- Use a single template literal string.\n\nFollow-up: Why are backticks preferred over `'string' + var`?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Strings",
        "topicOrder": 5,
        "examples": [
            {
                "input": "getReceipt('Pen', 20)",
                "output": "'The price of Pen is $20. With 10% tax: $22'",
                "explanation": "Embedding dynamic arithmetic evaluations directly within string literals."
            }
        ],
        "constraints": [
            "Must use backtick syntax",
            "Correct math within placeholder"
        ],
        "hints": [
            "Hint 1: `` `The price of ${item} is $${price}...` ``"
        ],
        "starterCode": "function getReceipt(item, price) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getReceipt('Apple', 100)",
                "expected": "returns 'The price of Apple is $100. With 10% tax: $110'",
                "isHidden": false
            }
        ],
        "solutionCode": "function getReceipt(item, price) {\n  return `The price of ${item} is $${price}. With 10% tax: $${price * 1.1}`;\n}",
        "tags": [
            "strings",
            "ES6",
            "interpolation"
        ]
    },
    {
        "problemId": 160,
        "title": "Convert Args to Array (Rest)",
        "slug": "convert-args-to-array-rest",
        "description": "When you don't know how many arguments a function will receive, use the Rest parameter `...` in the function definition.\n\nCreate a function `addAll` that takes an unknown number of arguments and returns their total sum. \n\nExample 1:\nInput: addAll(1, 2, 3)\nOutput: 6\n\nExample 2:\nInput: addAll(10, 10)\nOutput: 20\n\nConstraints:\n- Use `function addAll(...nums)`.\n- Use `.reduce()` internally for practice.\n\nFollow-up: How is `...nums` different from the legacy `arguments` object? (Hint: `...nums` is a real array, `arguments` is not!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Functions",
        "topicOrder": 8,
        "examples": [
            {
                "input": "addAll(5, 5, 5, 5)",
                "output": "20",
                "explanation": "Accumulating a variadic series of arguments into a single summation."
            }
        ],
        "constraints": [
            "Must use rest syntax in signature",
            "Must return summed total"
        ],
        "hints": [
            "Hint 1: `function addAll(...nums) { return nums.reduce((s, n) => s + n, 0); }`"
        ],
        "starterCode": "function addAll(...nums) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "addAll(1, 2, 3, 4, 5)",
                "expected": "returns 15",
                "isHidden": false
            }
        ],
        "solutionCode": "function addAll(...nums) {\n  return nums.reduce((acc, curr) => acc + curr, 0);\n}",
        "tags": [
            "functions",
            "rest",
            "HOF"
        ]
    },
    {
        "problemId": 161,
        "title": "Topic 15: Introduction to setTimeout",
        "slug": "introduction-to-settimeout",
        "description": "Topic 15: Asynchronous JS. `setTimeout` allows you to execute a function AFTER a certain number of milliseconds (1000ms = 1s).\n\nCreate a function `delayGreeting(name)`. It should use `setTimeout` to call a function that returns `'Hello, ' + name` after `2000` milliseconds.\n\nExample 1:\nInput: 'Shiv'\nOutput: After 2s, 'Hello, Shiv'\n\nConstraints:\n- Must use `setTimeout`.\n- Correct delay value (2000).\n\nFollow-up: Does `setTimeout` stop the rest of your code from running during the delay? (Hint: No, it is 'non-blocking'!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "delayGreeting('Ansh')",
                "output": "Delayed string",
                "explanation": "Scheduling a future functional execution in the environment event loop."
            }
        ],
        "constraints": [
            "Must use setTimeout",
            "Correct ms delay"
        ],
        "hints": [
            "Hint 1: `setTimeout(() => { ... }, 2000);`"
        ],
        "starterCode": "function delayGreeting(name) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "delay value",
                "expected": "is 2000",
                "isHidden": false
            }
        ],
        "solutionCode": "function delayGreeting(name) {\n  setTimeout(() => {\n    return 'Hello, ' + name;\n  }, 2000);\n}",
        "tags": [
            "async",
            "timers",
            "setTimeout"
        ]
    },
    {
        "problemId": 162,
        "title": "Clear the Timeout",
        "slug": "clear-the-timeout",
        "description": "`setTimeout` returns a unique ID. You can use this ID with `clearTimeout(id)` to cancel the delay before it happens.\n\nCreate a function `cancelAlarm(timerId)`. It should simply call `clearTimeout` using the provided `timerId`.\n\nExample 1:\nInput: `const id = setTimeout(...)`, cancelAlarm(id)\nOutput: Timer cancelled\n\nConstraints:\n- Use `clearTimeout`.\n\nFollow-up: Why is it important to clear timers when a component or page is closed?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "cancelAlarm(123)",
                "output": "undefined",
                "explanation": "Purging a scheduled event from the execution queue."
            }
        ],
        "constraints": [
            "Correct API usage"
        ],
        "hints": [
            "Hint 1: `clearTimeout(timerId);`"
        ],
        "starterCode": "function cancelAlarm(timerId) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "clearTimeout called",
                "expected": "true",
                "isHidden": false
            }
        ],
        "solutionCode": "function cancelAlarm(timerId) {\n  clearTimeout(timerId);\n}",
        "tags": [
            "async",
            "timers",
            "clearTimeout"
        ]
    },
    {
        "problemId": 163,
        "title": "Introduction to setInterval",
        "slug": "introduction-to-setinterval",
        "description": "`setInterval` is like `setTimeout`, but it repeats the function EVERY X milliseconds until stopped.\n\nCreate a function `startCounter`. It should call `setInterval` to print `'Tick'` to the console every `1000` milliseconds.\n\nExample 1:\nOutput: 'Tick' (every 1s)\n\nConstraints:\n- Use `setInterval`.\n- Delay: 1000.\n\nFollow-up: How do you stop an interval from running forever? (Hint: `clearInterval`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "startCounter()",
                "output": "Timer ID",
                "explanation": "Initiating a recurring cyclical execution pattern."
            }
        ],
        "constraints": [
            "Must use setInterval",
            "Correct 1000ms cadence"
        ],
        "hints": [
            "Hint 1: `setInterval(() => console.log('Tick'), 1000);`"
        ],
        "starterCode": "function startCounter() {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "interval value",
                "expected": "is 1000",
                "isHidden": false
            }
        ],
        "solutionCode": "function startCounter() {\n  return setInterval(() => {\n    console.log('Tick');\n  }, 1000);\n}",
        "tags": [
            "async",
            "timers",
            "setInterval"
        ]
    },
    {
        "problemId": 164,
        "title": "Passing Args to Timeout",
        "slug": "passing-args-to-timeout",
        "description": "You can pass arguments to the `setTimeout` callback function as additional parameters after the delay.\n\nCreate a function `delayedSum(a, b)`. Use `setTimeout` to call a function that returns `a + b` after `500`ms, but pass `a` and `b` as 3rd and 4th arguments to `setTimeout`.\n\nExample 1:\nInput: 5, 10\nOutput: After 0.5s, 15\n\nConstraints:\n- Use the `setTimeout(fn, delay, arg1, arg2...)` syntax.\n\nFollow-up: Why is this better than using a closure sometimes? (Hint: It avoids creating a new function instance in modern engines!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "delayedSum(1, 1)",
                "output": "2 (delayed)",
                "explanation": "Forwarding positional arguments into a scheduled functional payload."
            }
        ],
        "constraints": [
            "Must use multi-arg setTimeout signature",
            "Correct sum result"
        ],
        "hints": [
            "Hint 1: `setTimeout((x, y) => x + y, 500, a, b);`"
        ],
        "starterCode": "function delayedSum(a, b) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "parameter check",
                "expected": "uses 3rd/4th arg of setTimeout",
                "isHidden": false
            }
        ],
        "solutionCode": "function delayedSum(a, b) {\n  setTimeout((x, y) => {\n    return x + y;\n  }, 500, a, b);\n}",
        "tags": [
            "async",
            "timers",
            "parameters"
        ]
    },
    {
        "problemId": 165,
        "title": "Stopping the Interval",
        "slug": "stopping-the-interval",
        "description": "Create a function `stopAndReturn(intervalId)`. It should use `clearInterval` to stop the interval and return the string `'Stopped'`.\n\nExample 1:\nInput: 12345\nOutput: 'Stopped'\n\nConstraints:\n- Use `clearInterval`.\n\nFollow-up: What happens if you try to `clearInterval` on an ID that doesn't exist? (Hint: Nothing happens, it fails silently!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "stopAndReturn(99)",
                "output": "'Stopped'",
                "explanation": "Terminating a recurring timer subscription."
            }
        ],
        "constraints": [
            "Clear valid interval",
            "Correct string return"
        ],
        "hints": [
            "Hint 1: `clearInterval(intervalId); return 'Stopped';`"
        ],
        "starterCode": "function stopAndReturn(intervalId) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "stopAndReturn(1)",
                "expected": "returns 'Stopped'",
                "isHidden": false
            }
        ],
        "solutionCode": "function stopAndReturn(intervalId) {\n  clearInterval(intervalId);\n  return 'Stopped';\n}",
        "tags": [
            "async",
            "timers",
            "clearInterval"
        ]
    },
    {
        "problemId": 166,
        "title": "Recursive setTimeout (Intro)",
        "slug": "recursive-settimeout-intro",
        "description": "For exact timing, developers often use a recursive `setTimeout` instead of `setInterval` because it waits for the current work to finish before starting the next delay.\n\nCreate a function `repeatLog`. It should call a function `inner` using `setTimeout` (1000ms). The `inner` function should log `'Running'` and then call `inner` AGAIN using `setTimeout`.\n\nExample 1:\nOutput: Logs 'Running' every second.\n\nConstraints:\n- Must not use `setInterval`.\n- Must use recursion.\n\nFollow-up: Why is this better than `setInterval` for network-heavy tasks?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "repeatLog()",
                "output": "Recurring logs",
                "explanation": "Chaining independent delays to simulate intervals without drift overlap."
            }
        ],
        "constraints": [
            "Recursion required",
            "Use setTimeout only"
        ],
        "hints": [
            "Hint 1: `function run() { console.log('...'); setTimeout(run, 1000); }`"
        ],
        "starterCode": "function repeatLog() {\n  function inner() {\n    console.log('Running');\n    // call inner again here\n  }\n  // start the first call here\n}\n",
        "testCases": [
            {
                "input": "recursive check",
                "expected": "uses setTimeout recursively",
                "isHidden": false
            }
        ],
        "solutionCode": "function repeatLog() {\n  function inner() {\n    console.log('Running');\n    setTimeout(inner, 1000);\n  }\n  setTimeout(inner, 1000);\n}",
        "tags": [
            "async",
            "recursion",
            "setTimeout"
        ]
    },
    {
        "problemId": 167,
        "title": "Zeroth Delay setTimeout",
        "slug": "zeroth-delay-settimeout",
        "description": "What happens if you set the delay to `0`? It doesn't run immediately! It waits for the current 'Main Thread' to be empty.\n\nCreate a function `testZeroDelay`. It should: \n1. Print `'First'`\n2. Call `setTimeout` with `'Second'` and `0`ms.\n3. Print `'Third'`.\n\nExample 1:\nOutput: 'First', 'Third', 'Second' (Wait, why?!)\n\nConstraints:\n- Order of execution is critical here.\n\nFollow-up: What is the 'Event Loop' in JavaScript? (Hint: It's the engine that manages when to run these delayed tasks!)",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Asynchronous",
        "topicOrder": 15,
        "examples": [
            {
                "input": "testZeroDelay()",
                "output": "Ordered logs",
                "explanation": "Observing the priority of synchronous execution vs the asynchronous task queue."
            }
        ],
        "constraints": [
            "Observe 1-3-2 execution order",
            "Correct log syntax"
        ],
        "hints": [
            "Hint 1: `console.log('First'); setTimeout(() => console.log('Second'), 0); console.log('Third');`"
        ],
        "starterCode": "function testZeroDelay() {\n  // Log 'First'\n  // Timeout 'Second' with 0\n  // Log 'Third'\n}\n",
        "testCases": [
            {
                "input": "execution order",
                "expected": "logs match 1-3-2 timing",
                "isHidden": false
            }
        ],
        "solutionCode": "function testZeroDelay() {\n  console.log('First');\n  setTimeout(() => {\n    console.log('Second');\n  }, 0);\n  console.log('Third');\n}",
        "tags": [
            "async",
            "event-loop",
            "setTimeout"
        ]
    },
    {
        "problemId": 168,
        "title": "Topic 25: Logical Problem - Find Unique Object",
        "slug": "find-unique-object-logic",
        "description": "Given an array of user objects, find the FIRST user that has a specific `id`.\n\nCreate a function `getUserById(users, targetId)`. Return the object if found, otherwise return null.\n\nExample 1:\nInput: `[{id: 1, name: 'Shiv'}], 1`\nOutput: `{id: 1, name: 'Shiv'}`\n\nConstraints:\n- Use `.find()` or a loop.\n\nFollow-up: How is this different from `filter`? (Hint: Find stops at the first match!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "getUserById([{id:2}], 2)",
                "output": "{id: 2}",
                "explanation": "Targeting specific identity properties within a JSON dataset."
            }
        ],
        "constraints": [
            "Return full object",
            "Handle null if missing"
        ],
        "hints": [
            "Hint 1: `return users.find(u => u.id === targetId) || null;`"
        ],
        "starterCode": "function getUserById(users, targetId) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getUserById([{id: 10}], 10)",
                "expected": "returns {id: 10}",
                "isHidden": false
            }
        ],
        "solutionCode": "function getUserById(users, targetId) {\n  return users.find(u => u.id === targetId) || null;\n}",
        "tags": [
            "logic",
            "arrays",
            "searching"
        ]
    },
    {
        "problemId": 169,
        "title": "Count Vowels in Function",
        "slug": "count-vowels-functional",
        "description": "Create a function `countVowels(str)`. It should return the total count of vowels (a, e, i, o, u) in the string, case-insensitive.\n\nExample 1:\nInput: 'JavaScript'\nOutput: 3\n\nConstraints:\n- Function-wrapped.\n- Case-insensitive.\n\nFollow-up: Why is `str.toLowerCase()` better than checking `A, E, I...` separately?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "countVowels('Shiv')",
                "output": "1",
                "explanation": "Parsing string tokens to match a specific set of character constants."
            }
        ],
        "constraints": [
            "Return correct integer count",
            "Handle case insensitivity"
        ],
        "hints": [
            "Hint 1: `let vowels = 'aeiou'; ...`"
        ],
        "starterCode": "function countVowels(str) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "countVowels('Hello World')",
                "expected": "returns 3",
                "isHidden": false
            }
        ],
        "solutionCode": "function countVowels(str) {\n  const vowels = 'aeiouAEIOU';\n  let count = 0;\n  for (let char of str) {\n    if (vowels.includes(char)) count++;\n  }\n  return count;\n}",
        "tags": [
            "logic",
            "strings",
            "algorithms"
        ]
    },
    {
        "problemId": 170,
        "title": "Simple Factorial Function",
        "slug": "simple-factorial-function",
        "description": "A factorial of a number `n` is `n * (n-1) * (n-2)... * 1`.\n\nCreate a function `factorial(n)`. Return the factorial of `n`. For example, `factorial(5)` is `120`.\n\nExample 1:\nInput: 4\nOutput: 24\n\nConstraints:\n- Use a for loop or recursion.\n- Handle `factorial(0)` as `1`.\n\nFollow-up: What is the largest number JavaScript can handle for factorial before it becomes `Infinity`?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "factorial(3)",
                "output": "6",
                "explanation": "Calculating cumulative product sequences."
            }
        ],
        "constraints": [
            "Return correctly calculated product",
            "Handle 0 case"
        ],
        "hints": [
            "Hint 1: `let res = 1; for(let i=n; i>0; i--) res *= i; return res;`"
        ],
        "starterCode": "function factorial(n) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "factorial(5)",
                "expected": "returns 120",
                "isHidden": false
            },
            {
                "input": "factorial(0)",
                "expected": "returns 1",
                "isHidden": true
            }
        ],
        "solutionCode": "function factorial(n) {\n  if (n === 0) return 1;\n  let res = 1;\n  for (let i = 1; i <= n; i++) {\n    res *= i;\n  }\n  return res;\n}",
        "tags": [
            "logic",
            "math",
            "iteration"
        ]
    },
    {
        "problemId": 171,
        "title": "Calculate Hypotenuse",
        "slug": "calculate-hypotenuse-math",
        "description": "The Pythagorean theorem states: `a^2 + b^2 = c^2`. \n\nCreate a function `getHypotenuse(a, b)`. Use `Math.sqrt()` and `Math.pow()` (or `**`) to return `c`.\n\nExample 1:\nInput: 3, 4\nOutput: 5\n\nConstraints:\n- Must return the square root of the sum of squares.\n\nFollow-up: How is `Math.pow(x, 2)` different from `x * x` in terms of readability locally?",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Math",
        "topicOrder": 6,
        "examples": [
            {
                "input": "getHypotenuse(6, 8)",
                "output": "10",
                "explanation": "Applying standard trigonometric geometry formulas via the Math library."
            }
        ],
        "constraints": [
            "Correct formula implementation",
            "Must return number"
        ],
        "hints": [
            "Hint 1: `return Math.sqrt(a*a + b*b);`"
        ],
        "starterCode": "function getHypotenuse(a, b) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getHypotenuse(3, 4)",
                "expected": "returns 5",
                "isHidden": false
            }
        ],
        "solutionCode": "function getHypotenuse(a, b) {\n  return Math.sqrt(a * a + b * b);\n}",
        "tags": [
            "math",
            "geometry",
            "logic"
        ]
    },
    {
        "problemId": 172,
        "title": "Random Integer Range",
        "slug": "random-integer-range",
        "description": "`Math.random()` returns a float between 0 and 1. \n\nCreate a function `getRandomInt(min, max)`. It should return a random WHOLE number between `min` and `max` (inclusive).\n\nExample 1:\nInput: 1, 10\nOutput: A random number from {1, 2...10}\n\nConstraints:\n- Use `Math.floor()` and `Math.random()`.\n\nFollow-up: Why is `Math.floor()` preferred over `Math.round()` for this specific logic? (Hint: Distribution fairness!)",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Math",
        "topicOrder": 6,
        "examples": [
            {
                "input": "getRandomInt(1, 5)",
                "output": "Number",
                "explanation": "Scaling and shifting random floats into a discrete integer space."
            }
        ],
        "constraints": [
            "Inclusive of both min and max",
            "Correct integer math"
        ],
        "hints": [
            "Hint 1: `return Math.floor(Math.random() * (max - min + 1)) + min;`"
        ],
        "starterCode": "function getRandomInt(min, max) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "getRandomInt(1, 1)",
                "expected": "returns 1",
                "isHidden": false
            }
        ],
        "solutionCode": "function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}",
        "tags": [
            "math",
            "logic",
            "random"
        ]
    },
    {
        "problemId": 173,
        "title": "Check if Power of Two",
        "slug": "check-if-power-of-two",
        "description": "A number is a power of two if it can be written as `2^n` (e.g., 1, 2, 4, 8, 16).\n\nCreate a function `isPowerOfTwo(n)`. Return `true` or `false`.\n\nExample 1:\nInput: 8\nOutput: true\n\nExample 2:\nInput: 6\nOutput: false\n\nConstraints:\n- Return boolean.\n\nFollow-up: Can you solve this using a bitwise operator `&`? (Hint: `(n & (n - 1)) === 0`)!",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "isPowerOfTwo(16)",
                "output": "true",
                "explanation": "Verifying logarithmic divisibility."
            }
        ],
        "constraints": [
            "Correct boolean return",
            "Handle edge cases (n <= 0)"
        ],
        "hints": [
            "Hint 1: `if (n <= 0) return false; while (n % 2 === 0) n /= 2; return n === 1;`"
        ],
        "starterCode": "function isPowerOfTwo(n) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "isPowerOfTwo(32)",
                "expected": "returns true",
                "isHidden": false
            },
            {
                "input": "isPowerOfTwo(10)",
                "expected": "returns false",
                "isHidden": true
            }
        ],
        "solutionCode": "function isPowerOfTwo(n) {\n  if (n <= 0) return false;\n  return (n & (n - 1)) === 0;\n}",
        "tags": [
            "math",
            "logic",
            "algorithms"
        ]
    },
    {
        "problemId": 174,
        "title": "Mask Card Numbers",
        "slug": "mask-card-numbers",
        "description": "Privacy is key! Create a function `maskString(str)`. It should take a string of 16 digits and return a new string where all but the last 4 characters are replaced with `'#'`.\n\nExample 1:\nInput: '1234567812345678'\nOutput: '############5678'\n\nConstraints:\n- Use `.slice()` and `.repeat()` or `.padStart()`.\n\nFollow-up: Why is it important to mask credit card numbers in logs and UI?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "'11112222'",
                "output": "'####2222'",
                "explanation": "Redacting sensitive PII data while maintaining contextual tail-info."
            }
        ],
        "constraints": [
            "Last 4 chars must remain visible",
            "Total length must match input"
        ],
        "hints": [
            "Hint 1: `return str.slice(-4).padStart(str.length, '#');`"
        ],
        "starterCode": "function maskString(str) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "maskString('12345678')",
                "expected": "returns '####5678'",
                "isHidden": false
            }
        ],
        "solutionCode": "function maskString(str) {\n  const lastFour = str.slice(-4);\n  return lastFour.padStart(str.length, '#');\n}",
        "tags": [
            "strings",
            "logic",
            "privacy"
        ]
    },
    {
        "problemId": 175,
        "title": "Round to Precision",
        "slug": "round-to-precision-math",
        "description": "The `.toFixed(n)` method rounds a number and converts it to a STRING. Sometimes you want it back as a number.\n\nCreate a function `roundTo(num, places)`. Return the number `num` rounded to `places` decimal points, but as a actual NUMBER.\n\nExample 1:\nInput: 5.12345, 2\nOutput: 5.12\n\nConstraints:\n- Use `.toFixed()` followed by `Number()` or `parseFloat()`.\n\nFollow-up: Why does `0.1 + 0.2 !== 0.3` in JavaScript? (Hint: Floating point precision issues!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Math",
        "topicOrder": 6,
        "examples": [
            {
                "input": "roundTo(1.111, 1)",
                "output": "1.1",
                "explanation": "Formatting numerical precision while preserving type identity."
            }
        ],
        "constraints": [
            "Return as Number type",
            "Correct rounding accuracy"
        ],
        "hints": [
            "Hint 1: `return Number(num.toFixed(places));`"
        ],
        "starterCode": "function roundTo(num, places) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "roundTo(3.14159, 3)",
                "expected": "returns 3.142",
                "isHidden": false
            }
        ],
        "solutionCode": "function roundTo(num, places) {\n  return Number(num.toFixed(places));\n}",
        "tags": [
            "math",
            "strings",
            "conversion"
        ]
    },
    {
        "problemId": 176,
        "title": "Check Range Overlap",
        "slug": "check-range-overlap",
        "description": "Given two ranges `[a, b]` and `[c, d]`, determine if they overlap.\n\nCreate a function `overlap(a, b, c, d)`. Return `true` if they overlap, `false` otherwise.\n\nExample 1:\nInput: 1, 5, 4, 8\nOutput: true (4 and 5 overlap)\n\nExample 2:\nInput: 1, 2, 5, 6\nOutput: false\n\nConstraints:\n- Return boolean.\n\nFollow-up: How is this useful in UI calendar apps to prevent double-booking?",
        "difficulty": "Hard",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "overlap(1, 10, 5, 15)",
                "output": "true",
                "explanation": "Checking for intersection between two linear numerical boundaries."
            }
        ],
        "constraints": [
            "Correct intersection logic",
            "Boolean return"
        ],
        "hints": [
            "Hint 1: `return a <= d && c <= b;` (Standard overlap condition)"
        ],
        "starterCode": "function overlap(a, b, c, d) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "overlap(1, 5, 2, 3)",
                "expected": "returns true",
                "isHidden": false
            },
            {
                "input": "overlap(10, 20, 30, 40)",
                "expected": "returns false",
                "isHidden": true
            }
        ],
        "solutionCode": "function overlap(a, b, c, d) {\n  return a <= d && c <= b;\n}",
        "tags": [
            "logic",
            "math",
            "algorithms"
        ]
    },
    {
        "problemId": 177,
        "title": "Reverse Words in Sentence",
        "slug": "reverse-words-sentence",
        "description": "Unlike `'hello'.split('').reverse()`, which reverses letters, this challenge asks you to reverse the ORDER of words.\n\nCreate a function `reverseWords(sentence)`. \n\nExample 1:\nInput: 'go shiv mani'\nOutput: 'mani shiv go'\n\nConstraints:\n- Split by space `' '`, reverse, then join by space `' '`.\n\nFollow-up: What happens if there are multiple spaces between words?",
        "difficulty": "Medium",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "'a b c'",
                "output": "'c b a'",
                "explanation": "Tokenizing string phrases for structural inversion."
            }
        ],
        "constraints": [
            "Must maintain word integrity",
            "Correct word order"
        ],
        "hints": [
            "Hint 1: `return sentence.split(' ').reverse().join(' ');`"
        ],
        "starterCode": "function reverseWords(sentence) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "reverseWords('js is fun')",
                "expected": "returns 'fun is js'",
                "isHidden": false
            }
        ],
        "solutionCode": "function reverseWords(sentence) {\n  return sentence.split(' ').reverse().join(' ');\n}",
        "tags": [
            "strings",
            "logic",
            "algorithms"
        ]
    },
    {
        "problemId": 178,
        "title": "Remove Array Items (Filter)",
        "slug": "remove-array-items-logic",
        "description": "Create a function `removeValues(arr, val)`. It should return a new array where all items equal to `val` have been removed.\n\nExample 1:\nInput: [1, 2, 3, 2], 2\nOutput: [1, 3]\n\nConstraints:\n- Must use `.filter()`.\n\nFollow-up: How is this different from removing items with a loop? (Hint: Filter is easier to read!)",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "[1, 1], 1",
                "output": "[]",
                "explanation": "Purging targeted value instances from an iterative collection."
            }
        ],
        "constraints": [
            "Must return content array",
            "Exact match removal"
        ],
        "hints": [
            "Hint 1: `return arr.filter(item => item !== val);`"
        ],
        "starterCode": "function removeValues(arr, val) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "removeValues([1, 2, 1], 1)",
                "expected": "returns [2]",
                "isHidden": false
            }
        ],
        "solutionCode": "function removeValues(arr, val) {\n  return arr.filter(v => v !== val);\n}",
        "tags": [
            "arrays",
            "filter",
            "logic"
        ]
    },
    {
        "problemId": 179,
        "title": "Find Element Index",
        "slug": "find-element-index-logic",
        "description": "Create a function `locate(arr, val)`. Return the first index where `val` is found. If not found, return `-1`.\n\nExample 1:\nInput: ['a', 'b', 'c'], 'b'\nOutput: 1\n\nConstraints:\n- Use `.indexOf()` or a for loop.\n\nFollow-up: How do you find the LAST index if the item appears multiple times? (Hint: `.lastIndexOf()`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "[1, 2, 3], 3",
                "output": "2",
                "explanation": "Locating the zero-indexed offset of a value in memory."
            }
        ],
        "constraints": [
            "Return integer index",
            "Correct handle of missing values (-1)"
        ],
        "hints": [
            "Hint 1: `return arr.indexOf(val);`"
        ],
        "starterCode": "function locate(arr, val) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "locate([1, 2], 5)",
                "expected": "returns -1",
                "isHidden": false
            }
        ],
        "solutionCode": "function locate(arr, val) {\n  return arr.indexOf(val);\n}",
        "tags": [
            "arrays",
            "indexing",
            "logic"
        ]
    },
    {
        "problemId": 180,
        "title": "Swap Variable Values",
        "slug": "swap-variable-values-es6",
        "description": "Create a function `swap(a, b)`. Given two numbers, return them as an array `[b, a]` (swapped).\n\nExample 1:\nInput: 10, 20\nOutput: [20, 10]\n\nConstraints:\n- Use ES6 Destructuring: `[a, b] = [b, a]` logic.\n\nFollow-up: How did developers swap variables before ES6? (Hint: They used a temporary variable `let temp = a; a = b; b = temp;`)!",
        "difficulty": "Easy",
        "type": "JS",
        "category": "Basic Algorithms",
        "topicOrder": 25,
        "examples": [
            {
                "input": "swap(1, 2)",
                "output": "[2, 1]",
                "explanation": "Exchanging value assignments via syntactic sugar array-matching."
            }
        ],
        "constraints": [
            "Correct value inversion",
            "Return array format"
        ],
        "hints": [
            "Hint 1: `return [b, a];`"
        ],
        "starterCode": "function swap(a, b) {\n  // Your code here\n}\n",
        "testCases": [
            {
                "input": "swap(1, 2)",
                "expected": "returns [2, 1]",
                "isHidden": false
            }
        ],
        "solutionCode": "function swap(a, b) {\n  return [b, a];\n}",
        "tags": [
            "ES6",
            "destructuring",
            "logic"
        ]
    }
];

const seedDB = async () => {
    try {
        await connectDB();

        console.log('Clearing IDs 1-180...');
        await Problem.deleteMany({ problemId: { $gte: 1, $lte: 180 } });

        console.log('Inserting 180 clean problems...');
        await Problem.insertMany(problems, { ordered: false });
        console.log('SUCCESS: 180 problems live.');
        
        process.exit(0);
    } catch (err) {
        if (err.writeErrors) {
            console.error('WRITE ERRORS:', JSON.stringify(err.writeErrors.slice(0, 3), null, 2));
        } else {
            console.error('SEED ERROR:', err);
        }
        process.exit(1);
    }
};

seedDB();
