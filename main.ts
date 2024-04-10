#! /usr/bin/env node
import inquirer from "inquirer"
let todos = []
let conditon = true;

while(conditon){

let todosAns = await inquirer.prompt(
    [
    {
        name: "Q1",
        type: "input",
        message:"what would you like to add in your todos?"
        
},
{
        name: "Q2",
        type: "confirm",
        message:"what would you like to add more in your todos?",
        default:true
}
]
)
conditon = todosAns.Q2;

if(todosAns === ''){
todos.pop()
}
todos.push(todosAns.Q1)
// console.log(todos);
for(let i=0; i<todos.length; i++){
    console.log(`${todos[i]}\n`);
}


}
// read, update, delete, add, home work