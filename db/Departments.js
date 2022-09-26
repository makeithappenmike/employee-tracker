class Departments {

    constructor(department_id, name) {
        this.department_id = department_id;
        this.name = name;
    };

    viewDepartments() {

        const dbQuery = "SELECT * FROM department;"
    
        // Show all Departments
        connectDb(dbQuery);
    
        initialPrompt();
    
    };

}

module.exports = Departments;