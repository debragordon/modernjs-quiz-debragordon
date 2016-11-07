"use strict";

//grab player 1 name //grab player 1 animal //grab player 2 name //grab player 2 animal
let player1;
let player2;
let $enterButton = $("#enter-jungle-btn");
let $attackButton = $("#attack-btn");
let $rematchButton = $("#rematch-btn");
let $playerInputArea = $("#user-input-wrapper");
let $battleDiv = $("#jungle-bg");
let $player1;
let $player2;
let $battleResults = $("#battle-results");


//enter the jungle
$enterButton.click(() => {
  $player1 = $("#player-input-1").val();
  $player2 = $("#player-input-2").val();
  let $animalSelection1 = $("#animal-list-player1").val();
  let $animalSelection2 = $("#animal-list-player2").val();

  if ($player1 !== "" && $player2 !== "" && $animalSelection1 !== false && $animalSelection2 !== false) {
    $playerInputArea.addClass("hidden");   //hide player name inputs & animal selectors
    $enterButton.addClass("hidden");   //hide enter button
    $attackButton.removeClass("hidden"); //reveals the attack button
    $battleDiv.removeClass("hidden"); //reveals the battleground
    player1 = Jungle.createPlayers($animalSelection1, "player1");//make the animal objects
    player2 = Jungle.createPlayers($animalSelection2, "player2");//make the animal objects
    Jungle.statUpdater(player1, player2, $player1, $player2);   //updates the inner html with the stats
  } else {
    $battleResults.html(`<h1>Please make all the selections before entering the jungle</h1>`);
  }

});

$attackButton.click(function() {
  Jungle.damageGiver(player1, player2, $player1, $player2);   //change animal health
  Jungle.statUpdater(player1, player2, $player1, $player2);   //updates the inner html with the stats
});

