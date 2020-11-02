const fs = require ("fs"); 
const path = require("path"); 
const inquirer = require ("inquirer"); 
const generateMarkdown = require("./develop/utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input", 
        name: "github", 
        message: "What is your Github username?"
    },{
        type: "input", 
        name: "title", 
        message: "What is your project's name?"
    },
    {
        type: "input", 
        name: "email", 
        message: "What is your email ?"
    },
    { 
        type: "input", 
        name: "description", 
        message: "Please write a description of your project"
    },
    {
        type: "list", 
        name: "liscense", 
        message: "What kind of license does your project have?", 
        choices: ["APACHE 2.0", "MIT", "GPL 3.0", "None"]
    },
    {
        type: "iput", 
        name: "installation", 
        message: "What command should be run to install the dependencies?", 
        deafualt: "npm i"
    }, 
    {
        type: "input", 
        name: "test", 
        message: "What command should be run to run a test ?", 
        default: "npm test"
    },
    {
        type: "input", 
        name: "usage", 
        message: "Tell the user what they need to know about the repo", 
    }, 
    { 
        type: "input", 
        name: "usage", 
        message: "Tell the user what they need to know about contributing to the repo", 
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => { 
        console.log("Generating README"); 
        writeToFile("README.md", generateMarkdown({...inquirerResponses})); 

    })

}

// function call to initialize program
init();
