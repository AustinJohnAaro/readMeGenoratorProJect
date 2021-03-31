
let inquirer = require("inquirer");
let fs = require("fs");
let util = require("util");



let ReadMeTemplate = require('./ReadMeTemplate');

let createFile = util.promisify(fs.writeFile);

 
let promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'

        },
        {
            type:'input',
            name:'Project title',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required toinstall your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use. Include screenshots as needed:'
            
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required toinstall your project?',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache', 'MIT', 'Boost Software']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:',
        }

        
    ])
};
const questions = [];


function writeToFile(fileName, data) {}


function init() {
    promptUser() 
    .then(resPonses=>{
        console.log (resPonses)
        let createContent = ReadMeTemplate(resPonses);
        console.log(createContent)
    })
    




};


init();
