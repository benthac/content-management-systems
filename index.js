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
            'Add a roll',
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