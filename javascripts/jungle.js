/* globals -Jungle */
"use strict";

var Jungle = ((battle) => {

let player;
let playerImage;

let leftAnimal = $('#animal-left');
let rightAnimal = $('#animal-right');
let $battleResults = $("#battle-results");
let $animal1Stats = $("#animal1-stats");
let $animal2Stats = $("#animal2-stats");
let $attackButton = $("#attack-btn");
let $rematchButton = $("#rematch-btn");

  battle.createPlayers = (animal1, playerNum) =>{
    if(playerNum === "player1"){
      playerImage = leftAnimal;
    }
    if(playerNum === "player2"){
      playerImage = rightAnimal;
    }

    if(animal1 === "Lion") {
      playerImage.addClass('lion');
      player = new Jungle.AnimalKingdom.Lion();
    } else if (animal1 === "Bear") {
      playerImage.addClass('bear');
      player = new Jungle.AnimalKingdom.Bear();
    } else if (animal1 === "Python") {
      playerImage.addClass('snake');
      player = new Jungle.AnimalKingdom.Python();
    } else if (animal1 === "Viper") {
      playerImage.addClass('snake2');
      player = new Jungle.AnimalKingdom.Viper();
    } else if (animal1 === "Hawk") {
      playerImage.addClass('hawk');
      player = new Jungle.AnimalKingdom.Hawk();
    } else if (animal1 === "Eagle") {
      playerImage.addClass('eagle');
      player = new Jungle.AnimalKingdom.Hawk();
    }

    return player;

  };

  battle.damageGiver = (player1, player2, player1Name, player2Name) => {
    player1.health = player1.health - player2.damage; //change health
    player2.health = player2.health - player1.damage; //change health
    //once a player is at 0, pass on to the winner function
    if (player1.health <= 0 || player2.health <= 0) {
      battle.winner(player1, player2, player1Name, player2Name);
    }

  };

  battle.statUpdater = (player1, player2, player1Name, player2Name) => {
    $animal1Stats.html(
      `<h3>Animal: ${player1.name}</h3>
      <h4>Health: ${player1.health}</h4>
      <h4>Weapon: ${player1.weapon}</h4>
      <h5>User: ${player1Name}</h5>`
    );

    $animal2Stats.html(
      `<h3>Animal: ${player2.name}</h3>
      <h4>Health: ${player2.health}</h4>
      <h4>Weapon: ${player2.weapon}</h4>
      <h5>User: ${player2Name}</h5>`
    );
  };

  battle.winner = (player1, player2, player1Name, player2Name) => {
    if (player1.health > 0) {
      $battleResults.html(`<h2 class="winner">${player1Name} is king of the jungle!</h2>`);
    } else if (player2.health > 0) {
      $battleResults.html(`<h2 class="winner">${player2Name} is king of the jungle!</h2>`);
    }
    $attackButton.addClass("hidden");   //disables attack button when the winner/loser is determined
    $rematchButton.removeClass("hidden");   //reveals rematch button to refresh the page and allow a restart of the game
  };

  return battle;

})(Jungle || {});