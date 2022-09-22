INSERT INTO department (department_id, name)
VALUES (001, "Engineering"),
       (002, "Finance"),
       (003, "Legal"),
       (004, "Sales"),
       (005, "Support");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (001, "Engineer I", "75000", 001),
       (002, "Engineer II", "75000", 001),
       (003, "Engineer III", "75000", 001),
       (004, "Staff Engineer", "75000", 001),
       (005, "Principle Engineer", "75000", 001),
       (006, "Distinguished Engineer", "75000", 001),
       (007, "Engineering Manager", "75000", 001),
       (008, "Chief Financial Officer", "75000", 002),
       (009, "Paralegal", "75000", 003),
       (010, "Chief Councel", "75000", 003),
       (011, "Sales Lead", "75000", 004),
       (012, "Sales Associate", "75000", 004),
       (013, "Sales Manager", "75000", 004),
       (014, "Support Representative", "75000", 005),
       (015, "Tech Support Engineer", "75000", 005),
       (016, "Support Manager", "75000", 005);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "FirstName", "LastName", 001, 001);

INSERT INTO manager (id, first_name, last_name, role_id, department_id)
VALUES (001, "FirstName", "LastName", 001, 001);