const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');


const questions = [
    {
        type:'list',
        name:'options',
        message:'Select What you want to do',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee roll',
            'Quit'
        ],
    },
]

function viewDepartments() {
    db.promise().query(`SELECT * FROM department`).then(([rows, fields]) => {
    console.table(rows);
    }).then(init())};

function viewRoles() {
    db.promise().query(`SELECT * FROM role`).then(([rows, fields]) => {
    console.table(rows);
    }).then(init())};

function viewEmployees() {
    db.promise().query(`SELECT * FROM employee`).then(([rows, fields]) => {
    console.table(rows);
    }).then(init())};

function addDepartment() {
    let sql = `INSERT INTO department (id, name)
        VALUES (?,?)`;
    let params = [];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
};

function addRoles() {
    let sql = `INSERT INTO role (id, title, salary, department)
        VALUES (?,?,?,?)`;
    let params = [];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
};

function addEmployee() {
    let sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?,?)`;
let params = [];
db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

};

function init() {
    inquirer.prompt(questions).then((answers) => {
        switch (answers.options){
            case "View all departments":
                viewDepartments() 
                break
            case "View all roles":
                viewRoles() 
                break
            case "View all employees":
                viewEmployees() 
                break
                }

    }
    )};

init();