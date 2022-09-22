INSERT INTO department (department)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales"),
       ("Support");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Engineer I", "$50k", 1),
       (1, "Engineer II", "$50k", 1),
       (1, "Engineer III", "$50k", 1),
       (1, "Staff Engineer", "$50k", 1),
       (1, "Principle Engineer", "$50k", 1),
       (1, "Distinguished Engineer", "$50k", 1),
       (1, "Chief Financial Officer", "$50k", 1),
       (1, "Paralegal", "$50k", 1),
       (1, "Chief Councel", "$50k", 1),
       (1, "Support Representative", "$50k", 1),
       (1, "Tech Support Engineer", "$50k", 1),
       (1, "Manager", "$50k", 1);  

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "FirstName", "LastName", 1, 1),