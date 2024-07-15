#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let coditions = true;

console.log(chalk.bgCyan.bold("\n\t Todo-List-App\n")); 

while(coditions){

    let addTask = await inquirer.prompt([
        {
            name :"task",
            type : "input",
            message : "Entr Your New task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.bgGray(`${addTask.task} Task added in Todo-List successfully`));

    let addMoreTask = await inquirer.prompt([
        {
            name : "addmore",
            type : "confirm",
            message : "Do you want to add morentask",
            default : false,
        }
        
    ]);
    coditions = addMoreTask.addmore
}
console.log("Your Todo-List:",todoList);