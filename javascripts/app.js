//grab player 1 name //grab player 1 animal //grab player 2 name //grab player 2 animal
var player1;
var player2;
var $enterButton = $("#enter-jungle-btn");
var $attackButton = $("#attack-btn");
var $rematchButton = $("#rematch-btn");
var $playerInputArea = $("#user-input-wrapper");
var $player1;
var $player2;
//enter the jungle
$enterButton.click(function() {
  $player1 = $("#player-input-1").val();
  $player2 = $("#player-input-2").val();
  var $animalSelection1 = $("#animal-list-player1").val();
  var $animalSelection2 = $("#animal-list-player2").val();
    console.log("play1", $player1);
    console.log("play2", $player1);
    console.log("animal1", $animalSelection1);
    console.log("animal2", $animalSelection2);

  if ($player1 !== "" && $player2 !== "" && $animalSelection1 !== false && $animalSelection2 !== false) {
    $playerInputArea.addClass("hidden");   //hide player name inputs & animal selectors
    $enterButton.addClass("hidden");   //hide enter button
    $attackButton.removeClass("hidden"); //reveals the attack button
    console.log("animal selection 1", $animalSelection1);
    console.log("animal selection 2", $animalSelection2);
    Jungle.createPlayers($animalSelection1, $animalSelection2);//make the animal objects
    Jungle.statUpdater(player1, player2);   //updates the inner html with the stats
  } else {
    alert("please enter all necessary information before attempting to enter the jungle");
  }

});

$attackButton.click(function(){
  Jungle.damageGiver(player1, player2);    //change animal health
  Jungle.statUpdater(player1, player2);   //updates the inner html with the stats
});

