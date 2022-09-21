const inquirer = require('inquirer');

// Intial Questions
const initialQuestions = [
    {
        type: 'list',
        message: 'Hello! Which team member would you like to add first?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'choice'
    }
];

// Initial Prompt
function initialPrompt() {
    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        console.log(response);

    });
};

// Create a function to initialize app
function init() {
    initialPrompt();
} init();