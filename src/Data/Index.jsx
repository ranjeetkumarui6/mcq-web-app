export const questions = [
    {
        id: 1,
        question: "What does 'NaN' stand for in JavaScript?",
        options: {
            A: "Not a Number",
            B: "Null and Null",
            C: "Number and Null",
            D: "None of the above"
        },
        answer: "Not a Number"
    },
    {
        id: 2,
        question: "Which of the following is a JavaScript data type?",
        options: {
            A: "Number",
            B: "String",
            C: "Boolean",
            D: "All of the above"
        },
        answer: "All of the above"
    },
    {
        id: 3,
        question: "What symbol is used for comments in JavaScript?",
        options: {
            A: "//",
            B: "/* */",
            C: "#",
            D: "Both A and B"
        },
        answer: "Both A and B"
    },
    {
        id: 4,
        question: "Which function is used to parse a string to an integer in JavaScript?",
        options: {
            A: "parseInt()",
            B: "toInteger()",
            C: "parseFloat()",
            D: "Number()"
        },
        answer: "parseInt()"
    },
    {
        id: 5,
        question: "What will be the output of `typeof null` in JavaScript?",
        options: {
            A: "'null'",
            B: "'object'",
            C: "'undefined'",
            D: "'number'"
        },
        answer: "object"
    },
    {
        id: 6,
        question: "Which method is used to remove the last element from an array?",
        options: {
            A: "pop()",
            B: "shift()",
            C: "delete()",
            D: "slice()"
        },
        answer: "pop()"
    },
    {
        id: 7,
        question: "What does the `this` keyword refer to in a function?",
        options: {
            A: "The global object",
            B: "The function itself",
            C: "The object that called the function",
            D: "None of the above"
        },
        answer: "The object that called the function"
    },
    {
        id: 8,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
            A: "onclick",
            B: "onmouseover",
            C: "onchange",
            D: "onfocus"
        },
        answer: "onclick"
    },
    {
        id: 9,
        question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
        options: {
            A: "true",
            B: "false",
            C: "undefined",
            D: "NaN"
        },
        answer: "false"
    },
    {
        id: 10,
        question: "Which of the following is a way to create a JavaScript object?",
        options: {
            A: "Using object literals",
            B: "Using the new keyword",
            C: "Using Object.create()",
            D: "All of the above"
        },
        answer: "All of the above"
    },
    {
        id: 11,
        question: "What is the purpose of the `setTimeout` function?",
        options: {
            A: "To set a timer for user input",
            B: "To delay the execution of a function",
            C: "To repeat a function continuously",
            D: "To set a time zone"
        },
        answer: "To delay the execution of a function"
    },
    {
        id: 12,
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: {
            A: "var",
            B: "let",
            C: "const",
            D: "All of the above"
        },
        answer: "All of the above"
    },
    {
        id: 13,
        question: "What will be the output of the following code? `console.log(typeof [1, 2, 3])`",
        options: {
            A: "'array'",
            B: "'object'",
            C: "'number'",
            D: "'undefined'"
        },
        answer: "object"
    },
    {
        id: 14,
        question: "Which built-in method can be used to convert a string to a number?",
        options: {
            A: "toString()",
            B: "parseInt()",
            C: "valueOf()",
            D: "Both B and C"
        },
        answer: "Both B and C"
    },
    {
        id: 15,
        question: "What does the `Array.isArray()` method do?",
        options: {
            A: "Checks if an array contains a specific value",
            B: "Returns the number of elements in an array",
            C: "Checks if a variable is an array",
            D: "Converts an array to a string"
        },
        answer: "Checks if a variable is an array"
    },
    {
        id: 16,
        question: "Which operator is used to assign a value to a variable?",
        options: {
            A: "-",
            B: "=",
            C: "==",
            D: "==="
        },
        answer: "="
    },
    {
        id: 17,
        question: "What is the output of `typeof [1]`?",
        options: {
            A: "'array'",
            B: "'object'",
            C: "'number'",
            D: "'undefined'"
        },
        answer: "object"
    },
    {
        id: 18,
        question: "Which method adds an element to the end of an array?",
        options: {
            A: "unshift()",
            B: "push()",
            C: "pop()",
            D: "shift()"
        },
        answer: "push()"
    },
    {
        id: 19,
        question: "What is the correct way to create a function in JavaScript?",
        options: {
            A: "function myFunction {}",
            B: "function:myFunction() {}",
            C: "function myFunction() {}",
            D: "create myFunction() {}"
        },
        answer: "function myFunction() {}"
    },
    {
        id: 20,
        question: "Which keyword is used to prevent a variable from being reassigned?",
        options: {
            A: "let",
            B: "const",
            C: "var",
            D: "static"
        },
        answer: "const"
    }
];

// Example: Accessing questions and options
// questions.forEach(q => {
//     console.log(`ID: ${q.id}, Question: ${q.question}`);
//     for (const key in q.options) {
//         console.log(`${key}: ${q.options[key]}`);
//     }
// });
