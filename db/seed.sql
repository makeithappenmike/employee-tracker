INSERT INTO department (department_id, name)
VALUES (001, "Engineering"),
       (002, "Finance"),
       (003, "Legal"),
       (004, "Sales"),
       (005, "Support");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (001, "Engineer I", "85000", 001),
       (002, "Engineer II", "95000", 001),
       (003, "Engineer III", "105000", 001),
       (004, "Staff Engineer", "115000", 001),
       (005, "Principle Engineer", "125000", 001),
       (006, "Distinguished Engineer", "135000", 001),
       (007, "Engineering Manager", "95000", 001),
       (008, "Chief Financial Officer", "150000", 002),
       (009, "Paralegal", "85000", 003),
       (010, "Chief Legal Councel", "145000", 003),
       (011, "Sales Lead", "65000", 004),
       (012, "Sales Associate", "55000", 004),
       (013, "Sales Manager", "80000", 004),
       (014, "Support Representative", "65000", 005),
       (015, "Tech Support Engineer", "75000", 005),
       (016, "Support Manager", "90000", 005);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (001, "FirstName", "LastName", 001, 001);

INSERT INTO manager (employee_id, first_name, last_name, manager_id, department_id)
VALUES (001, "FirstName", "LastName", 001, 001);