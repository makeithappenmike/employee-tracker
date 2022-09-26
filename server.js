const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');
// Import and require mysql2
// const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const db = await mysql.createConnection({host:'localhost', user: 'root', password: 'root', database: 'employee_db'});
    // query database
    const [rows, fields] = await db.execute('SHOW tables;');
  }
// const db = mysql.createConnection(
//     {host:'localhost', user: 'root', password: 'root', database: 'employee_db'}
//   );
//   db.promise().query("SELECT *")
//     .then( ([rows,fields]) => {
//       console.log(rows);
//     })
//     .catch(console.log)
//     .then( () => db.end());

// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: 'root',
//     database: 'employee_db'
//   },
//   console.log(`Connected to the employee_db database.`)
// );

// Intial Questions
const initialQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
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
        type: 'list',
        message: 'What is the role of the employee?',
        choices: ['Engineer I', 'Engineer II', 'Engineer III', 'Staff Engineer', 'Principle Engineer', 'Distinguished Engineer', 'Engineering Manager', 'Chief Financial Officer', 'Paralegal', 'Chief Councel', 'Sales Lead', 'Sales Associate', 'Sales Manager', 'Support Representative', 'Tech Support Engineer', 'Support Manager'],
        name: "employeeRole"
    },
    {
        type: 'list',
        message: 'Who is the manager of the employee?',
        choices: ['Bob Robert', 'Susie Susanson', 'Kevin King', 'Nancy Nosey', 'Phylis Peterson'],
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

        const choice = response.choice;

        // Handle selection
        if (choice === "View All Departments") {
            console.log("View All Departments");
            viewDepartments();
        } else if (choice === "View All Roles") {
            console.log("View All Roles");
            viewRoles();
        } else if (choice === "View All Employees") {
            console.log("View All Employees");
            viewEmployees();
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

async function connectDb(dbQuery) {

    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const db = await mysql.createConnection({host:'localhost', user: 'root', password: 'root', database: 'employee_db'});
    // query database
    const [rows, fields] = await db.execute(dbQuery);
    console.log("\n");
    console.table(rows);

};

// View Departments
function viewDepartments() {

    const dbQuery = "SELECT * FROM department;"

    // Show all Departments
    connectDb(dbQuery);

    initialPrompt();

};

// View Roles
function viewRoles() {

    const dbQuery = "SELECT * FROM role;"

    // Show all Departments
    connectDb(dbQuery);

    initialPrompt();

};

// Get Role titles onle
function viewRoleTitles() {

    const dbQuery = "SELECT * FROM role;"

    // Show all Departments
    connectDb(dbQuery);

};

// View Employees
function viewEmployees() {

    const dbQuery = "SELECT * FROM employee;"

    // Show all Departments
    connectDb(dbQuery);

    initialPrompt();

};

// Add Department
function addDepartment() {
    // Run inquirer
    inquirer
    .prompt(addDepartmentQuestions)
    .then((response) => {

        console.log(response);

        const departmentName = response.departmentName;

        const dbQuery = `INSERT INTO department (department_id, name) VALUES (department_id, "${response.departmentName}");`

        // Show all Departments
        connectDb(dbQuery);

        initialPrompt();

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

        // ['Engineer I', 'Engineer II', 'Engineer III', 'Staff Engineer', 'Principle Engineer', 'Distinguished Engineer', 'Engineering Manager', 'Chief Financial Officer', 'Paralegal', 'Chief Legal Councel', 'Sales Lead', 'Sales Associate', 'Sales Manager', 'Support Representative', 'Tech Support Engineer', 'Support Manager']
        
        var roleId = "";
        var managerId = "";
        const employeeRole = response.employeeRole;
        const employeeManager = response.employeeManager;

        // Handle role selection
        if (employeeRole.includes("Engineer")) {
            roleId = "001";
            parseInt(roleId);
        } else if (employeeRole.includes("Financial")) {
            roleId = "002";
            parseInt(roleId);
        } else if (employeeRole.includes("Legal")) {
            roleId = "003";
            parseInt(roleId);
        } else if (employeeRole.includes("Sales")) {
            roleId = "004";
            parseInt(roleId);
        } else if (employeeRole.includes("Support")) {
            roleId = "005";
            parseInt(roleId);
        };

        const dbQuery = `INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) VALUES (employee_id, "${response.employeeFirst}", "${response.employeeLast}", ${roleId}, manager_id);`

        // Show all Departments
        connectDb(dbQuery);

        initialPrompt();

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
    main();
    initialPrompt();
} init();