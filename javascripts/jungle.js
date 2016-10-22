var Jungle = (function(battle){

let animal1, animal2

var $leftAnimal = $('#animal-left');
var $rightAnimal = $('#animal-right');
var $battleResults = $("#battle-results");
var $animal1Stats = $("#animal1-stats");
var $animal2Stats = $("#animal2-stats");

  battle.createPlayers = function(animal1, animal2) {
    if(animal1 === "Lion") {
      $leftAnimal.addClass('lion');
      player1 = new Jungle.AnimalKingdom.Lion();
    } else if (animal1 === "Bear") {
      $leftAnimal.addClass('bear');
      player1 = new Jungle.AnimalKingdom.Bear();
    } else if (animal1 === "Python") {
      $leftAnimal.addClass('snake');
      player1 = new Jungle.AnimalKingdom.Python();
    } else if (animal1 === "Viper") {
      $leftAnimal.addClass('snake2');
      player1 = new Jungle.AnimalKingdom.Viper();
    } else if (animal1 === "Hawk") {
      $leftAnimal.addClass('hawk');
      player1 = new Jungle.AnimalKingdom.Hawk();
    } else if (animal1 === "Eagle") {
      $leftAnimal.addClass('eagle');
      player1 = new Jungle.AnimalKingdom.Hawk();
    }
    console.log("player 1", player1);

    if(animal2 === "Lion") {
      $rightAnimal.addClass('lion');
      player2 = new Jungle.AnimalKingdom.Lion();
    } else if (animal2 === "Bear") {
      $rightAnimal.addClass('bear');
      player2 = new Jungle.AnimalKingdom.Bear();
    } else if (animal2 === "Python") {
      $rightAnimal.addClass('snake');
      player2 = new Jungle.AnimalKingdom.Python();
    } else if (animal2 === "Viper") {
      $rightAnimal.addClass('snake2');
      player2 = new Jungle.AnimalKingdom.Viper();
    } else if (animal2 === "Hawk") {
      $rightAnimal.addClass('hawk');
      player2 = new Jungle.AnimalKingdom.Hawk();
    } else if (animal2 === "Eagle") {
      $rightAnimal.addClass('eagle');
      player2 = new Jungle.AnimalKingdom.Hawk();
    }
    console.log("player 2", player2);
  };

  battle.damageGiver = function(player1, player2){
    player1.health = player1.health - player2.damage; //change health
    player2.health = player2.health - player1.damage; //change health
    //once a player is at 0, pass on to the winner function
    if (player1.health <= 0 || player2.health <= 0) {
      battle.winner();
    }

  }

  battle.statUpdater = function(player1, player2) {
    $animal1Stats.html(
      `<h3>Animal: ${player1.name}</h3>
      <h4>Health: ${player1.health}</h4>
      <h4>Weapon: ${player1.weapon}</h4>
      <h5>User: ${$player1}</h5>` /*this should be a player name*/
    );

    $animal2Stats.html(
      `<h3>Animal: ${player2.name}</h3>
      <h4>Health: ${player2.health}</h4>
      <h4>Weapon: ${player2.weapon}</h4>
      <h5>User: ${$player2}</h5>` /*this should be a player name*/
    );
  }

  battle.winner = function (){
    if (player1.health > 0) {
      console.log("player 1 wins");
      $battleResults.html(`<h2 class="winner">${$player1} is king of the jungle!</h2>`);
    } else if (player2.health > 0) {
      console.log("player 2 wins");
      $battleResults.html(`<h2 class="winner">${$player2} is king of the jungle!</h2>`);
    }
    $attackButton.addClass("hidden");   //disables attack button when the winner/loser is determined
    $rematchButton.removeClass("hidden");   //reveals rematch button to refresh the page and allow a restart of the game
  }

  return battle;

})(Jungle || {});