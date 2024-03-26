
    
    

 

import inquirer from "inquirer";
// 1) computer will generate a random number -Done
// 2) user input for guessing number -Done
// 3) compare user input with computer random number and display ouput -Done9

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
    { name: "UserGuessingNumber",
    type: "number",
    message: "Kindly guess a number between 1-10",
},
]);
 if(answer.UserGuessingNumber===randomNumber){
    console.log("Congratulation your guessed number is correct");
  }
   else{
        console.log(" you guessed wrong number");
    }
