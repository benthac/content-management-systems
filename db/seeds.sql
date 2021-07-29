INSERT INTO department (name)
VALUES
    ('Management'),
    ('Finance'),
    ('HR'),
    ('Payroll'),
    ('Opperations');

INSERT INTO role (title, salary, department_id)
VALUES
    ('accountant', 30.00, 5),
    ('associate', 15.00, 2),
    ('manager', 35.00, 1),
    ('assistant', 20.00, 2),
    ('courier', 10.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Debbie', 'Brown', 3, NULL),
    ('Nancy', 'Smith', 1, NULL),
    ('Mark', 'Thacker', 4, NULL),
    ('Bob', 'Bobbins', 5, 1),
    ('Tom', 'Brady', 5, NULL);