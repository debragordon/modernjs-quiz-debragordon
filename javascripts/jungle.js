var Jungle = (function(battle){

let animal1, animal2

  battle.setAnimalPosition = function(animal1, animal2) {
    if(animal1.class === "lion") {
      $('#animal-right').addClass('lion');
    } else if (animal1.class === "bear") {
      $('#animal-right').addClass('bear');
    } else if (animal1.class === "snake") {
      $('#animal-right').addClass('snake');
    } else if (animal1.class === "snake2") {
      $('#animal-right').addClass('snake2');
    } else if (animal1.class === "hawk") {
      $('#animal-right').addClass('hawk');
    } else if (animal1.class === "eagle") {
      $('#animal-right').addClass('eagle');
    }

    if(animal2.class === "lion") {
      $('#animal-right').addClass('lion');
    } else if (animal2.class === "bear") {
      $('#animal-right').addClass('bear');
    } else if (animal2.class === "snake") {
      $('#animal-right').addClass('snake');
    } else if (animal2.class === "snake2") {
      $('#animal-right').addClass('snake2');
    } else if (animal2.class === "hawk") {
      $('#animal-right').addClass('hawk');
    } else if (animal2.class === "eagle") {
      $('#animal-right').addClass('eagle');
    }
  };

  battle.statUpdater = function(animal1, animal2) {
    $("#animal1-stats").html(
      `<h3>${animal1.type}</h3>
      <h4>${animal1.class}</h4>
      <h4>${animal1.health}</h4>
      <h4>${animal1.damage}</h4>
      <h5>${animal1.name}</h5>`
    );

    $("#animal2-stats").html(
      `<h3>${animal2.type}</h3>
      <h4>${animal2.class}</h4>
      <h4>${animal2.health}</h4>
      <h4>${animal2.damage}</h4>
      <h5>${animal2.name}</h5>`
    );
  }

  battle.InitializeJungleAttack = function() {
    animal1 = currentAnimal1;
    animal2 = currentAnimal2;

    battle.setAnimalPosition(animal1, animal2);

    battle.statUpdater(animal1, animal2);
  }

  $("#attack-btn").on("click", function(){
    let animal1AttackMath = Math.floor(Math.random() * (animal1.attack + 1));
    let animal2AttackMath = Math.floor(Math.random()* (animal2.attack + 1));
    let animal2Attack, animal1Attack;

    animal2Attack = animal2.health -= animal1AttackMath;
    battle.updateanimal2Health();
    //animal2 attack after 3 seconds
    setTimeout(function(){
      animal1Attack = animal1.health -= animal2AttackMath;
      battle.updateanimal1Health();
    }, 1000);
    break;
  }

  if (animal1.health <= 0) {
    animal1.health === 0;
    setTimeout(function() {
      $("#attack-btn").attr("disabled", true);
      $("#attack-btn").addClass('hidden');
      $("#rematch-btn").removeClass('hidden');
      $('#attack-results')[0].innerText = "${animal2.class} is the winner";
      }, 1500);
    } else if (animal2.health <= 0) {
      animal2.health === 0;
      setTimeout(function() {
        $("#attackButton").attr("disabled", true);
        $("#attackButton").addClass('hidden');
        $("#rematchButton").removeClass('hidden');
      $('#attack-results')[0].innerText = "${animal1.class} is the winner";
      }, 1500);
    }
  });

  return battle;

})(Jungle || {});