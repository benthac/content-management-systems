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
    ('associate', 15.00, 10),
    ('manager', 35.00, 1),
    ('assistant', 20.00, 2),
    ('courier', 10.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Debbie', 'Brown', 8, 0),
    ('Nancy', 'Smith', 1, 2),
    ('Mark', 'Thacker', 46, 0),
    ('Bob', 'Bobbins', 7, 0),
    ('Tom', 'Brady', 44, 0);