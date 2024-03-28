#! /usr/bin/env node
import inquirer from "inquirer";
const num = await inquirer.prompt([
  { message: "Enter first number", name: "firstNum", type: "number" },
  { name: "secondNum", message: "Enter second Number", type: "number" },
  {
    message: "Enter one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if(num.operator == "Addition"){
  console.log(num.firstNum + num.secondNum);
  
}
else if(num.operator == "Subtraction"){
  console.log(num.firstNum - num.secondNum);
}
else if(num.operator == "Multiplication"){
  console.log(num.firstNum * num.secondNum);
}else if(num.operator == "Division"){
  console.log(num.firstNum / num.secondNum);
}
else{
  console.log("Invalid Operator"); 
}