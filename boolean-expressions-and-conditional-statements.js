/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasWeapon = true;
const hasCharisma = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?"); //promopts the user to type 'mountains' or 'village'

if (choice === "mountains" && hasTorch) { //if the user types 'mountains' AND hasTorch is true
  console.log("You safely navigate through the dark mountains. But there are creatures ahead.");
  if (hasWeapon) { //since hasWeapon is true, the output will be the string below
    console.log("Good thing you have this awesome weapon to fight with!"); 
    const choice2 = readline.question("Do you want to 'recover' after your fight or 'continue' on?"); //prompts user to type 'recover' or 'continue'
    if (choice2 === "recover") { //if user types 'recover' the string below will be the result
      console.log("You decide to make a fire and take a few hours of rest.");
    } else if (choice2 === "continue") { //if user types 'continue' the string below will be the result
      console.log("You press on despite being tired, ready to face whatever lays ahead!");
    }
  } else  { //if hasWeapon was changed to false, the string below will be the result
    console.log("Too bad you don't have a weapon! Maybe you should turn back.")
  }
} else if (choice === "mountains" && !hasTorch) { //if the user types 'mountains' AND hasTorch is false
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || !hasMap) { //if the user types 'village' OR hasMap is true
  console.log("You find your way to the village.");
  if (!hasWeapon && !hasCharisma) { //nested conditional: if they choose village AND hasWeapon is false AND hasCharisma is false
    console.log("The villagers take no notice in your arrival.");
  } else if (!hasWeapon && hasCharisma) { // chose village AND hasWeapon is false AND hasCharisma is true
    console.log("The villagers are pleased with your arrival!");
  } else if (hasWeapon || !hasCharisma) { //chose village AND hasWeapon is true OR hasCharisma is false
    console.log("The villagers are distrustful of your arrival.");
    const choice3 = readline.question("Do you want to intimidate them? 'yes' or 'no'?"); //prompts the user to type 'yes' or 'no'
    if (choice3 === "yes") { //if user types 'yes', the text below is the result
      console.log("You pretend to lunge at a passing villager.");
    } else if (choice3 === "no") { //if user types 'no', the text below is the result
      console.log("You try to find the nearest Tavern.")
    }
  }
} else {
  console.log("You get lost and wander aimlessly."); //if neither option is chosen
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/