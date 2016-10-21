var Jungle = (function(jungleClasses){
//NEED TO CORRECT IIFE SYNTAX!?!

  const Animal = function() {
    this.damage = 50;
    this.health = 100;
    this.weapon = null;
  };

//TYPE = four-legged

  const FourLegged = function() {
    this.movement = "Walker";
  }

  FourLegged.prototype = new Animal();

//MODELS (2)

  const Lion = function() {
    this.name = "Lion";
    this.health += 100;
    this.damageRange = null;
  }

  Lion.prototype = new FourLegged();

  const Bear = function() {
    this.name = "Bear";
    this.health = null;
    this.damageRange = null;
  }

  Bear.prototype = new FourLegged();

//TYPE = Two-winged

  const TwoWinged = function() {
    this.movement = "Sky-flier";
  }

  TwoWinged.prototype = new Animal();

//MODELS (2)

  const Eagle = function() {
    this.name = "Eagle";
    this.health += 75;
    this.damageRange = null;
  }

  Eagle.prototype = new TwoWinged();

  const Hawk = function() {
    this.name = "Hawk";
    this.health += 25;
    this.damageRange = null;
  }

  Hawk.prototype = new TwoWinged();

//TYPE = scaled

  const ScaleCrawler = function() {
    this.movement = "Ground-hugger";
  }

  ScaleCrawler.prototype = new Animal();

//MODELS (2)

  const Viper = function() {
    this.name = "Viper";
    this.health += 25;
    this.damageRange = null;
  }

  Viper.prototype = new ScaleCrawler();

  const Python = function() {
    this.name = "Python";
    this.health += 125;
    this.damageRange = null;
  }

  Python.prototype = new ScaleCrawler();

  // return jungleClasses;

})(Jungle || {});