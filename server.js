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
    password: 'root',
    database: 'INSERT' // TODO: update this
  },
  console.log(`Connected to the INSERT database.`) // TODO: update this
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
        name: "employeeFirst"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "employeeLast"
    },
    {
        type: "input",
        message: "What is the employee's role?",
        name: "employeeRole"
    },
    {
        type: "input",
        message: "Who is the employee's manager?",
        name: "employeeManager"
    },
];

// Update an Employee Questions
const updateEmployeeQuestions = [
    {
        type: 'list',
        message: 'Which employee would you like to make updates to?',
        choices: ['Employee'],
        name: 'employeeToUpdate'
    }
];

// Initial Prompt
function initialPrompt() {
    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        console.log(response);

        // Handle selection
        if (choice === "View All Departments") {
            console.log("View All Departments");
        } else if (choice === "View All Roles") {
            console.log("View All Roles");
        } else if (choice === "View All Employees") {
            console.log("View All Employees");
        } else if (choice === "Add a Department") {
            addDepartment();
        } else if (choice === "Add a Role") {
            addRole();
        } else if (choice === "Add an Employee") {
            addEmployee();
        } else if (choice === "Update an Employee Role") {
            updateEmployee();
        } else {
            console.log("No Selection Made");
        }

    });
};

// 'View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'

// Add Department
function addDepartment() {
    // Run inquirer
    inquirer
    .prompt(addDepartmentQuestions)
    .then((response) => {

        console.log(response);

    });
};

// Add Role
function addRole() {
    // Run inquirer
    inquirer
    .prompt(addRoleQuestions)
    .then((response) => {

        console.log(response);

    });
};

// Add Employee
function addEmployee() {
    // Run inquirer
    inquirer
    .prompt(addEmployeeQuestions)
    .then((response) => {

        console.log(response);

    });
};

// Update Employee
function updateEmployee() {
    // Run inquirer
    inquirer
    .prompt(updateEmployeeQuestions)
    .then((response) => {

        console.log(response);

    });
};




// Create a function to initialize app
function init() {
    initialPrompt();
} init();