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
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains. But there are creatures ahead.");
  if (hasWeapon === true) {
    console.log("Good thing you have this awesome weapon to fight with!");
  } else {
    console.log("Too bad you don't have a weapon! Maybe you should turn back.")
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  if (hasWeapon === false && hasCharisma === false) {
    console.log("The villagers take no notice in your arrival.");
  } else if (hasWeapon === false && hasCharisma === true) {
    console.log("The villagers are pleased with your arrival!");
  } else if (hasWeapon === true || hasCharisma === false) {
    console.log("The villagers are distrustful of your arrival.")
    const choice2 = readline.question("Do you want to intimidate them? 'yes' or 'no'?");
    if (choice2 === "Yes") {
      console.log("You pretend to lunge at a passing villager.")
    } else if (choice2 === "No") {
      console.log("You try to find the nearest Tavern.")
    }
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/