require('dotenv').config();
const mongoose = require('mongoose');
const Problem = require('./models/Problem');

const seedArrays = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected to Atlas.');

        // Clear existing Array Method problems to avoid duplicates
        await Problem.deleteMany({ category: 'Array Methods' });
        console.log('Cleared existing Array Methods problems.');

        const lastProb = await Problem.findOne().sort('-problemId');
        let nextId = (lastProb && lastProb.problemId) ? lastProb.problemId + 1 : 100;

        const problems = [
            {
                title: '1. Your First Collection',
                slug: 'create-simple-array',
                description: "You're organizing your first coding project and need a place to store your lucky numbers. Arrays are perfectly suited for keeping multiple items in a specific, indexed order.\n\nWrite a function `createArray` that returns a simple collection containing the numbers `1`, `2`, and `3`.\n\nExample 1:\nInput: createArray()\nOutput: [1, 2, 3]\nExplanation:\n  - The numbers are stored in a single variable called an array.\n  - The order matters: 1 is first, 2 is second, and 3 is third.\n\nConstraints:\n- Must return a valid Array literal `[]`.\n- Must contain exactly three numeric elements: 1, 2, and 3.\n\nFollow-up: How would you store strings instead of numbers in an array?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'createArray()', output: '[1, 2, 3]', explanation: 'The first three integers in order.' }],
                constraints: ['Must return an Array object.', 'Array must contain exactly 3 numbers.'],
                starterCode: 'function createArray() {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[]', expected: '[1, 2, 3]', isHidden: false }]
            },
            {
                title: '2. The Silver Medalist',
                slug: 'access-second-element',
                description: "Imagine you're processing the results of a race. The runner in the second position is often just as important as the winner, but they live at a different 'address' in your array.\n\nWrite a function `getSecondElement` that accepts an array and returns the element at the second position. Remember that JavaScript uses zero-based indexing!\n\nExample 1:\nInput: [\"Gold\", \"Silver\", \"Bronze\"]\nOutput: \"Silver\"\nExplanation:\n  - Index 0 is \"Gold\".\n  - Index 1 is \"Silver\".\n\nConstraints:\n- The array will have at least 2 elements for the main test cases.\n- Return the exact value found at that index.\n\nFollow-up: What index would you use to get the 'Bronze' medalist?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'getSecondElement([10, 20, 30])', output: '20', explanation: 'Index 1 corresponds to the number 20.' }],
                constraints: ['The input will always be an array.'],
                starterCode: 'function getSecondElement(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [
                    { input: '[[10, 20, 30]]', expected: '20', isHidden: false },
                    { input: '[["apple", "banana"]]', expected: '"banana"', isHidden: false }
                ]
            },
            {
                title: '3. Capacity Check',
                slug: 'array-length-checker',
                description: "You're building a digital elevator. For safety reasons, the elevator should only operate if it's not 'Overloaded'. \n\nWrite a function `checkLength` that takes an array. If the array has more than 5 items, return the string `\"Long\"`. Otherwise, return `\"Short\"`.\n\nExample 1:\nInput: [1, 2, 3, 4, 5, 6]\nOutput: \"Long\"\nExplanation:\n  - The length is 6, which is greater than 5.\n\nExample 2:\nInput: [\"a\", \"b\"]\nOutput: \"Short\"\nExplanation:\n  - The length is 2, which is not greater than 5.\n\nConstraints:\n- Use the `.length` property.\n- Return the strings exactly as specified (case-sensitive).\n\nFollow-up: Can an array have a length of 0? If so, what would that look like?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'checkLength([1, 2, 3, 4, 5, 6])', output: '"Long"', explanation: 'Length 6 > 5.' }],
                constraints: ['The array can contain any data types.'],
                starterCode: 'function checkLength(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [
                    { input: '[[1,2,3,4,5,6]]', expected: '"Long"', isHidden: false },
                    { input: '[[1,2,3]]', expected: '"Short"', isHidden: false }
                ]
            },
            {
                title: '4. Update the Leader',
                slug: 'modify-first-element',
                description: "In a dynamic list, the top spot can change in an instant. Maybe a new high score was set, or the first item in your grocery list was swapped out.\n\nWrite a function `updateFirst` that takes an array and a new value. Update the element at index 0 with this new value and return the modified array.\n\nExample 1:\nInput: ([10, 20, 30], 99)\nOutput: [99, 20, 30]\nExplanation:\n  - The original 10 at the start is replaced by 99.\n\nConstraints:\n- You must modify the original array, not create a new one.\n- Return the full array after the update.\n\nFollow-up: Why is it important to know that arrays are 'mutable' (changeable) in JavaScript?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'updateFirst([10, 20, 30], 99)', output: '[99, 20, 30]', explanation: 'Index 0 updated.' }],
                constraints: ['The array will always have at least one element.'],
                starterCode: 'function updateFirst(arr, val) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[10, 20, 30], 99]', expected: '[99, 20, 30]', isHidden: false }]
            },
            {
                title: '5. Line up at the End',
                slug: 'push-to-array',
                description: "When a new customer enters a shop, they naturally join the back of the queue. \n\nWrite a function `addAtEnd` that takes an array and a new item. Use a built-in method to add the item to the end of the array and return the modified array.\n\nExample 1:\nInput: ([1, 2], 3)\nOutput: [1, 2, 3]\nExplanation:\n  - The number 3 is 'pushed' onto the end of the list.\n\nConstraints:\n- Do not use index-based assignment (like `arr[arr.length] = item`). Use the proper array method.\n\nFollow-up: What does the `.push()` method actually return when you call it? (Try checking the MDN documentation!)",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'addAtEnd([1, 2], 3)', output: '[1, 2, 3]', explanation: '3 added at the tail.' }],
                constraints: ['Modify the existing array.'],
                starterCode: 'function addAtEnd(arr, item) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2], 3]', expected: '[1, 2, 3]', isHidden: false }]
            },
            {
                title: '6. The Last One Out',
                slug: 'pop-from-array',
                description: "In some systems, the last item added is the first one removed (think of a stack of plates). \n\nWrite a function `removeLast` that takes an array, removes the very last element using a built-in method, and returns that removed element.\n\nExample 1:\nInput: [\"Bread\", \"Milk\", \"Eggs\"]\nOutput: \"Eggs\"\nExplanation:\n  - \"Eggs\" was at the end, so it is removed and returned.\n\nConstraints:\n- This operation should change the length of the original array.\n\nFollow-up: If you call this function on an empty array `[]`, what do you think it returns?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'removeLast([1, 2, 3])', output: '3', explanation: '3 is popped off.' }],
                constraints: ['Modify the original array.'],
                starterCode: 'function removeLast(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2, 3]]', expected: '3', isHidden: false }]
            },
            {
                title: '7. Cutting the Front',
                slug: 'shift-elements',
                description: "Sometimes the person at the front of the line finishes their transaction and leaves. \n\nWrite a function `removeFirst` that removes the first element of an array and returns the modified array.\n\nExample 1:\nInput: [10, 20, 30]\nOutput: [20, 30]\nExplanation:\n  - The index 0 element (10) is removed.\n  - All other elements 'shift' down to fill the gap.\n\nConstraints:\n- Return the array, not the removed value.\n\nFollow-up: How is `.shift()` different from `.pop()`?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'removeFirst([10, 20, 30])', output: '[20, 30]', explanation: '10 is shifted out.' }],
                constraints: ['Return the array itself after removing.'],
                starterCode: 'function removeFirst(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[10, 20, 30]]', expected: '[20, 30]', isHidden: false }]
            },
            {
                title: '8. Cutting the Line',
                slug: 'unshift-elements',
                description: "V.I.P. guests don't wait at the back; they get inserted right at the front of the list.\n\nWrite a function `addToFront` that takes an array and a value. Insert the value at the start of the array and return the modified array.\n\nExample 1:\nInput: ([2, 3], 1)\nOutput: [1, 2, 3]\nExplanation:\n  - 1 is prepended to the array.\n\nConstraints:\n- Modify the array in place.\n\nFollow-up: Adding to the front of a very large array can be 'slower' for a computer than adding to the back. Why might that be?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'addToFront([2, 3], 1)', output: '[1, 2, 3]', explanation: '1 added at front.' }],
                constraints: ['Modify the original array in place.'],
                starterCode: 'function addToFront(arr, val) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[2, 3], 1]', expected: '[1, 2, 3]', isHidden: false }]
            },
            {
                title: '9. Point of Interest',
                slug: 'find-index-element',
                description: "Finding a specific book on a shelf is easier if you know exactly which slot it sits in.\n\nWrite a function `findTarget` that takes an array and a target value. Return the index of the first occurrence of that target. If it doesn't exist, return `-1`.\n\nExample 1:\nInput: ([\"A\", \"B\", \"C\"], \"B\")\nOutput: 1\nExplanation:\n  - \"B\" is found at index 1.\n\nConstraints:\n- Use a built-in searching method.\n\nFollow-up: What happens if the target appears twice in the array? Which index does this method return?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'findTarget(["apple", "banana"], "banana")', output: '1', explanation: 'Index 1.' }],
                constraints: ['Use a built-in array method.'],
                starterCode: 'function findTarget(arr, target) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[["apple", "banana", "orange"], "banana"]', expected: '1', isHidden: false }]
            },
            {
                title: '10. Security Swipe',
                slug: 'element-exists',
                description: "A security scanner simply needs to know: 'Is this ID card in my list of allowed visitors?'\n\nWrite a function `doesExist` that takes an array and a target. Return `true` if it exists, and `false` otherwise.\n\nExample 1:\nInput: ([1, 2, 3], 2)\nOutput: true\n\nExample 2:\nInput: ([1, 2, 3], 5)\nOutput: false\n\nConstraints:\n- Return a boolean value.\n\nFollow-up: How is `.includes()` different from `.indexOf()`?",
                difficulty: 'Easy', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'doesExist([1, 2, 3], 2)', output: 'true', explanation: '2 is present.' }],
                constraints: ['Return a pure boolean.'],
                starterCode: 'function doesExist(arr, target) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2, 3], 2]', expected: 'true', isHidden: false }]
            },
            {
                title: '11. Building a Sentence',
                slug: 'join-array-string',
                description: "A bag of words isn't a sentence until you glue them together with spaces.\n\nWrite a function `createSentence` that takes an array of words and returns a single string where words are separated by spaces.\n\nExample 1:\nInput: [\"I\", \"love\", \"JavaScript\"]\nOutput: \"I love JavaScript\"\n\nConstraints:\n- Do not use a manual loop.\n- Ensure there are no trailing or leading spaces.\n\nFollow-up: What happens if you use an empty string `\"\"` as the separator instead of a space `\" \"`?",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'createSentence(["Hello", "JS"])', output: '"Hello JS"', explanation: 'Joined by spaces.' }],
                constraints: ['Use an array method.'],
                starterCode: 'function createSentence(words) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[["Hello", "world", "JS"]]', expected: '"Hello world JS"', isHidden: false }]
            },
            {
                title: '12. Word Counter Prep',
                slug: 'split-string-array',
                description: "To count words in a message, we first need to break the massive wall of text into individual units.\n\nWrite a function `breakSentence` that takes a string and returns an array of its words based on space separators.\n\nExample 1:\nInput: \"Speed of light\"\nOutput: [\"Speed\", \"of\", \"light\"]\n\nConstraints:\n- The input string will have single spaces between words.\n\nFollow-up: If you split a string by the letter 'e', what do you think happened to the 'e's in the resulting array?",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'breakSentence("Coding is fun")', output: '["Coding", "is", "fun"]', explanation: '3 elements.' }],
                constraints: ['Assume single spaces.'],
                starterCode: 'function breakSentence(str) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '["Coding is fun"]', expected: '["Coding", "is", "fun"]', isHidden: false }]
            },
            {
                title: '13. Taking a Snippet',
                slug: 'slice-a-section',
                description: "Sometimes you don't need the whole cake, just a specific slice from the middle.\n\nWrite a function `getMiddle` that takes an array and returns a NEW array containing only the elements at index 1 and index 2.\n\nExample 1:\nInput: [100, 200, 300, 400]\nOutput: [200, 300]\nExplanation:\n  - Starts at index 1.\n  - Ends BEFORE index 3.\n\nConstraints:\n- Do NOT modify the original array.\n\nFollow-up: If you call `.slice(1)`, where does the 'slice' end?",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'getMiddle([10, 20, 30, 40])', output: '[20, 30]', explanation: 'Indices 1 and 2.' }],
                constraints: ['Do not modify original.'],
                starterCode: 'function getMiddle(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[10, 20, 30, 40]]', expected: '[20, 30]', isHidden: false }]
            },
            {
                title: '14. Surgery on the Array',
                slug: 'splice-and-replace',
                description: "Unlike a slice, a 'splice' is major surgery. It removes items AND can insert new ones in their place.\n\nWrite a function `replaceSecond` that removes the element at index 1 and replaces it with the string `\"Changed!\"`. Return the modified array.\n\nExample 1:\nInput: [1, 2, 3]\nOutput: [1, \"Changed!\", 3]\n\nConstraints:\n- Modify the array in place.\n\nFollow-up: What does `.splice()` return? Is it the modified array, or the items that were removed?",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'replaceSecond([1, 2, 3])', output: '[1, "Changed!", 3]', explanation: '2 is replaced.' }],
                constraints: ['Modify in place.'],
                starterCode: 'function replaceSecond(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2, 3]]', expected: '[1, "Changed!", 3]', isHidden: false }]
            },
            {
                title: '15. The Mirror World',
                slug: 'reverse-the-array',
                description: "Flip the script! In many algorithms, you need to read data backwards.\n\nWrite a function `flipArray` that reverses the order of elements in an array.\n\nExample 1:\nInput: [1, 2, 3, 4]\nOutput: [4, 3, 2, 1]\n\nConstraints:\n- This method should modify the array permanently.\n\nFollow-up: Does string have a built-in `.reverse()` method? (Hint: Try it in your console!)",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'flipArray([1, 2, 3])', output: '[3, 2, 1]', explanation: 'Order reversed.' }],
                constraints: ['Reverses in place.'],
                starterCode: 'function flipArray(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2, 3]]', expected: '[3, 2, 1]', isHidden: false }]
            },
            {
                title: '16. Exclusive VIP List',
                slug: 'filter-even-numbers',
                description: "Filtering allows you to keep only the data that meets a specific condition (like 'Even Numbers Only').\n\nWrite a function `getEvens` that returns a new array containing only the even numbers from the input array.\n\nExample 1:\nInput: [1, 2, 3, 4, 5, 6]\nOutput: [2, 4, 6]\nExplanation:\n  - 2, 4, and 6 are divisible by 2 with 0 remainder.\n\nConstraints:\n- Use the `.filter()` method for an elegant solution.\n\nFollow-up: How would you write a condition to filter for numbers greater than 10?",
                difficulty: 'Hard', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'getEvens([1, 2, 3, 4, 5])', output: '[2, 4]', explanation: 'Even numbers only.' }],
                constraints: ['Use .filter().'],
                starterCode: 'function getEvens(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2, 3, 4, 5]]', expected: '[2, 4]', isHidden: false }]
            },
            {
                title: '17. The Level Up',
                slug: 'map-to-squares',
                description: "Mapping is like putting every item in your array through a 'transformer' machine.\n\nWrite a function `squareAll` that takes an array of numbers and returns a new array where every number is squared (multiplied by itself).\n\nExample 1:\nInput: [2, 3, 4]\nOutput: [4, 9, 16]\n\nConstraints:\n- The input array must NOT be changed.\n- Return the new array in the same order.\n\nFollow-up: How is `.map()` different from a standard `forEach` loop?",
                difficulty: 'Hard', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'squareAll([2, 3, 4])', output: '[4, 9, 16]', explanation: 'Squares applied.' }],
                constraints: ['Return a new array.'],
                starterCode: 'function squareAll(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[2, 3, 4]]', expected: '[4, 9, 16]', isHidden: false }]
            },
            {
                title: '18. Unified Front',
                slug: 'merge-arrays',
                description: "Two smaller teams decide to merge to become one powerful squad. \n\nWrite a function `mergeArrays` that combines two arrays into one single new array.\n\nExample 1:\nInput: ([1], [2, 3])\nOutput: [1, 2, 3]\n\nConstraints:\n- Use the `.concat()` method or the spread operator if you know it.\n\nFollow-up: Does `.concat()` change the original arrays?",
                difficulty: 'Medium', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'mergeArrays([1, 2], [3, 4])', output: '[1, 2, 3, 4]', explanation: 'Joined together.' }],
                constraints: ['New array returned.'],
                starterCode: 'function mergeArrays(arr1, arr2) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[1, 2], [3, 4]]', expected: '[1, 2, 3, 4]', isHidden: false }]
            },
            {
                title: '19. The Palindrome Loop',
                slug: 'is-string-palindrome',
                description: "A palindrome is a word that reads the same forward and backward. We can use array methods to check this easily!\n\nWrite a function `isPalindrome` that checks if a string is a palindrome using `.split()`, `.reverse()`, and `.join()`.\n\nExample 1:\nInput: \"racecar\"\nOutput: true\n\nExample 2:\nInput: \"hello\"\nOutput: false\n\nConstraints:\n- Return a boolean.\n\nFollow-up: Why do we need to 'join' the array back into a string before comparing?",
                difficulty: 'Hard', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'isPalindrome("racecar")', output: 'true', explanation: 'Symmetric word.' }],
                constraints: ['Method chaining recommended.'],
                starterCode: 'function isPalindrome(str) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '["racecar"]', expected: 'true', isHidden: false }, { input: '["hello"]', expected: 'false', isHidden: false }]
            },
            {
                title: '20. King of the Hill',
                slug: 'find-maximum-number',
                description: "Finding the leader in a group of values requires comparing them all and keeping track of the current champion.\n\nWrite a function `findMax` that takes an array of numbers and returns the largest value.\n\nExample 1:\nInput: [10, 5, 50, 20]\nOutput: 50\n\nConstraints:\n- Try to use the `.reduce()` method for a 'Hard' challenge, or a loop if needed.\n\nFollow-up: What would you set your 'initial max' value to if the array contained only negative numbers?",
                difficulty: 'Hard', type: 'JS', category: 'Array Methods', topicOrder: 8,
                examples: [{ input: 'findMax([1, 10, 2])', output: '10', explanation: '10 is max.' }],
                constraints: ['Array always has >= 1 element.'],
                starterCode: 'function findMax(arr) {\n    // your code here\n}',
                hints: [], solutionCode: '',
                testCases: [{ input: '[[10, 50, 20, 5]]', expected: '50', isHidden: false }]
            }
        ];

        for (let prob of problems) {
            prob.problemId = nextId++;
            await Problem.create(prob);
            console.log(`Created (v3 style): ${prob.title}`);
        }

        console.log('V3 Seeding COMPLETE!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedArrays();
