const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const tableData = require("./src/template-page");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const teamMembers = [];


const initManager = () => {
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
        addTeamMembers()
    })
}

const addTeamMembers = () => {
    inquirer.prompt([{
            type: "list",
            name: "name",
            message: "What team member do you want to add?",
            choices: ["Manager","Engineer", "Intern", "Exit application"]
        }])
        .then((response) => {
            switch (response.name) {
                case "Engineer":


                    addEngineer();

                    break;

                case "Intern":
                    hireIntern();
                    break;
                case "Manager":
                    initManager();
                    break;
                default:
                    generateHTML();
                    
            }
        })
}

addTeamMembers();

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
            name: "github",
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
        addTeamMembers()
        // TODO: Is this where I add the addTeamMembers() function?

    })
}



const hireIntern = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your intern's name?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid intern's name."
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
            name: "school",
            message: "What is your school?",
            validate: (input) => {
                if (input) {
                    return true;
                } else return "Please enter a valid school."
            }

        }

    ]).then((response) => {
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(newIntern);
        addTeamMembers();
    })
}


const generateHTML = () => {

   fs.writeFileSync ( "./dist/team.html",tableData (teamMembers),function(err){
        if (err) {
            console.log(err);
        }

        console.log("It works!");
   });
console.log ("Generating HTML...");


}


