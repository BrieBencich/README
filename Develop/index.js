const fs = require ("fs"); 
const path = require("path"); 
const inquirer = require ("./utils/generateMarkdown"); 

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
    },{
        
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
