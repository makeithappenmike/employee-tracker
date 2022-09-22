const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// Intial Questions
const initialQuestions = [
    {
        type: 'list',
        message: 'Hello! Which team member would you like to add first?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'choice'
    }
];

// Add Department Questions
const addDepartmentQuestions = [
    {
        type: "input",
        message: "What is the name of the department you'd like to add?",
        name: "departmentName"
    }
];

// Add Role Questions
const addRoleQuestions = [
    {
        type: "input",
        message: "What is the name of the new role you'd like to add?",
        name: "roleName"
    },
    {
        type: "input",
        message: "What is the salary for this role?",
        name: "roleSalary"
    },
    {
        type: "input",
        message: "What is the department for this role?",
        name: "roleDepartment"
    },
];

// Add Employee Questions
const addEmployeeQuestions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "roleName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "roleSalary"
    },
    {
        type: "input",
        message: "What is the employee's role?",
        name: "roleDepartment"
    },
    {
        type: "input",
        message: "Who is the employee's manager?",
        name: "roleDepartment"
    },
];

// Update an Employee Questions
const updateEmployeeQuestions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "roleName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "roleSalary"
    },
    {
        type: "input",
        message: "What is the employee's role?",
        name: "roleDepartment"
    },
    {
        type: "input",
        message: "Who is the employee's manager?",
        name: "roleDepartment"
    },
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

// Add Department
function addDepartment() {
    // Run inquirer
    inquirer
    .prompt(addDepartmentQuestions)
    .then((response) => {

        console.log(response);

    });
};




// Create a function to initialize app
function init() {
    initialPrompt();
} init();