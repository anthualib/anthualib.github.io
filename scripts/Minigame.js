// Starting stats for player
let hero = {
    name: "The Hungry Protagonist",
    health: 5,
    strength: 12,
    defense: 1
};

// Starting stats for the opponent
let pickle = {
    name: "The Pickle Jar",
    health: 50,
    strength: 2,
    defense: 5
};

// Function to display hero stats in the HTML
function displayHeroStats() {
    document.getElementById("HeroName").textContent = hero.name;
    document.getElementById("HeroHealth").textContent = hero.health;
    document.getElementById("HeroStrength").textContent = hero.strength;
    document.getElementById("HeroDefense").textContent = hero.defense;
}

// Function to display pickle's stats in the HTML
function displayPickleStats() {
    document.getElementById("PickleName").textContent = pickle.name;
    document.getElementById("PickleHealth").textContent = pickle.health;
    document.getElementById("PickleStrength").textContent = pickle.strength;
    document.getElementById("PickleDefense").textContent = pickle.defense;
}

// Call the function to display the hero's stats when the page loads
 window.onload = function() {
            displayHeroStats();
            displayPickleStats();
        };

//Function to give up
function giveup() {
        let remainingDamage = hero.health;
        if (hero.health > 0) {
          hero.health -= remainingDamage;
            alert(`Exhausted, ${hero.name} stare into the middle distance, questioning all your life decisions. Hunger consumes you and you take ${remainingDamage} damage!`);
        } else {
            alert(`Fool! The game is already over! You can go now.`);
        }
        document.getElementById("reward").innerText = "💀💀💀" //show skulls upon being defeated
        // Update and display current health after giving up
        displayHeroStats();
        displayPickleStats();
        }

document.getElementById("giveup").addEventListener("click", giveup);


// Function to handle a single round of battle
function OpenSeasame() {
    if (hero.health > 0 && pickle.health > 0) {
        // Hero attempts to open the jar
        let heroDamage = hero.strength - pickle.defense;
        if (heroDamage > 0) {
            pickle.health -= heroDamage;
            alert(`You twist as hard as you can. ${hero.name} does ${heroDamage} damage to ${pickle.name}`);
        } else {
            alert(`${hero.name} attacks, but it does no damage!`);
        }

        // Check if Pickle is defeated
        if (pickle.health <= 0) {
          pickle.health = 0; //to prevent pickle's HP from showing a negative value
          alert(`The jar pops open!!! ${pickle.name} is defeated! You collect your loot!`);
          document.getElementById("reward").innerText = "🥒";
          displayHeroStats(); // Update and display hero health after each turn
          displayPickleStats(); // Update and display pickle health after each turn  
          return; // End the battle
        }

        // Pickle attacks Hero
        let pickleDamage = pickle.strength - hero.defense;
        if (pickleDamage > 0) {
            hero.health -= pickleDamage;
            alert(`${pickle.name} taunts you. You feel embarrassed and feel your vitality drop. ${hero.name} takes ${pickleDamage} damage!`);
        } else {
            alert(`${pickle.name} taunts, but it has no effect.`);
        }

        // Check if Hero is defeated
        if (hero.health <= 0) {
            alert(`O-oh? ${hero.name} died? Maybe you should have ordered take out. Oh well! Game over.`);        
        document.getElementById("reward").innerText = "💀💀💀";
        displayHeroStats(); // Update and display hero health after each turn
        displayPickleStats(); // Update and display pickle health after each turn
        return; // End the battle
        }


} else {
            alert(`Fool! The game is over! Come again soon?`);
        }
     displayHeroStats(); // Update and display hero health after each turn
     displayPickleStats(); // Update and display pickle health after each turn

}

// Attach the battleRound function to the button click event
document.getElementById("fight").addEventListener("click", OpenSeasame);

// Player dries their hands
function DryHands() {
  if (hero.health > 0 && pickle.health > 0) {
  // "if" statement so that the player's strength cant get increased infinitely
    if (hero.strength < 30) {
      hero.strength += 12;
alert(`${hero.name} dries a hand, and their Strength increased by 12!`);
        } else {
            alert(`You only have two hands! And they are both already desert dry!`);
        }
      
   // Pickle attacks Hero
        let pickleDamage = pickle.strength - hero.defense;
        if (pickleDamage > 0) {
            hero.health -= pickleDamage;
            alert(`While you were distracted, ${pickle.name} taunts you. ${hero.name} takes ${pickleDamage} damage!`);
        } else {
            alert(`${pickle.name} taunts, but it has no effect.`);
        }

        // Check if Hero is defeated
        if (hero.health <= 0) {
            alert(`O-oh? ${hero.name} died? Well, at least your hands are sweat free! Game over.`);
          document.getElementById("reward").innerText = "💀💀💀"
        }


} else {
            alert(`Fool! The game is already over! Goodbye!`);
        }

        // Update and display current health after each turn
        displayHeroStats();
        displayPickleStats();
        return; // End the battle
}

document.getElementById("dryhands").addEventListener("click", DryHands)
