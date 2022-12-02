const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const {
    inherits
} = require("util");

const teamMembers = [];

const init = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your manager's name?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid manager name."
            }

        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid email address."
            },

        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid ID."

            },
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid office number."
            }

        }

    ]).then((response) => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(newManager);

    })
}

const addTeamMembers = () => {
    inquirer.prompt([{
            type: "list",
            name: "name",
            message: "What team member do you want to addd?",
            choices: ["Engineer", "Intern", "Exit application"]
        }])
        .then((response) => {
            switch (response.name) {
                case "Engineer":


                    // TODO: Write this function 
                    addEngineer();

                    break;

                case "Intern":
                    // TODO: write this function
                    hireIntern();
                    break;
                default:
                    generateHTML();
            }
        })
}


const addEngineer = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your engineer's name?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid engineer's name."
            }

        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid email address."
            },

        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid ID."

            },
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is your Github?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid Github."
            }

        }

    ]).then((response) => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(newEngineer);

    })
}
// const render = require("./src/page-template.js");


// const idArray = [];

// TODO: function to create menu for app 

// TODO: sub function to create Manager
// TODO: function to create Team
// TODO: Function to add Engineer
// TODO: function to add Intern