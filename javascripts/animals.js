/* globals -Jungle */
"use strict";

var Jungle = ((jungleClasses) =>{

  jungleClasses.AnimalKingdom = {};

  jungleClasses.AnimalKingdom.Animal = function() {
    this.name = "";
    this.damage = 100;
    this.health = 1000;
    this.weapon = null;
  };

  var damageSetter = (min, max) =>{
    return Math.random() * (max - min) + min;
  };

  jungleClasses.AnimalKingdom.FourLegged = function() {
    this.movement = "Walker";
  };

  jungleClasses.AnimalKingdom.FourLegged.prototype = new jungleClasses.AnimalKingdom.Animal();

  jungleClasses.AnimalKingdom.Lion = function() {
    this.name = "Lion";
    this.health += 100;
    this.damgage = damageSetter(100, 140);
    this.weapon = "Claws";
  };

  jungleClasses.AnimalKingdom.Lion.prototype = new jungleClasses.AnimalKingdom.FourLegged();

  jungleClasses.AnimalKingdom.Bear = function() {
    this.name = "Bear";
    this.health += 125;
    this.damgage = damageSetter(70, 110);
    this.weapon = "Ax";
  };

  jungleClasses.AnimalKingdom.Bear.prototype = new jungleClasses.AnimalKingdom.FourLegged();

  jungleClasses.AnimalKingdom.TwoWinged = function() {
    this.movement = "Sky-flier";
  };

  jungleClasses.AnimalKingdom.TwoWinged.prototype = new jungleClasses.AnimalKingdom.Animal();

  jungleClasses.AnimalKingdom.Eagle = function() {
    this.name = "Lion";
    this.health += 50;
    this.damgage = damageSetter(60, 100);
    this.weapon = "Talons";
  };

  jungleClasses.AnimalKingdom.Eagle.prototype = new jungleClasses.AnimalKingdom.TwoWinged();

  jungleClasses.AnimalKingdom.Hawk = function() {
    this.name = "Hawk";
    this.health += 40;
    this.damgage = damageSetter(30, 70);
    this.weapon = "Beak";
  };

  jungleClasses.AnimalKingdom.Hawk.prototype = new jungleClasses.AnimalKingdom.TwoWinged();

  jungleClasses.AnimalKingdom.ScaleCrawler = function() {
    this.movement = "Ground-hugger";
  };

  jungleClasses.AnimalKingdom.ScaleCrawler.prototype = new jungleClasses.AnimalKingdom.Animal();

  jungleClasses.AnimalKingdom.Viper = function() {
    this.name = "Viper";
    this.health += 20;
    this.damgage = damageSetter(100, 140);
    this.weapon = "Fangs";
  };

  jungleClasses.AnimalKingdom.Viper.prototype = new jungleClasses.AnimalKingdom.ScaleCrawler();

  jungleClasses.AnimalKingdom.Python = function() {
    this.name = "Bear";
    this.health += 30;
    this.damgage = damageSetter(40, 75);
    this.weapon = "Strangulation";
  };

  jungleClasses.AnimalKingdom.Python.prototype = new jungleClasses.AnimalKingdom.ScaleCrawler();

  return jungleClasses;

})(Jungle || {});






