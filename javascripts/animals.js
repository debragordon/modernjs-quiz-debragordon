var Jungle = (function(jungleClasses){

  jungleClasses.Kingdom = {};

  jungleClasses.Kingdom.AnimalClass = function() {
    this.class = null;
    this.type = null;
    this.damage = null;
    this.health = null;

    this.toString = function() {
      return this.name;
    }
  };

  jungleClasses.Kingdom.Lion = function() {
    this.class = "Lion";
    this.type = "4-legged";
    this.damage = 50;
    this.health = 80;
  };
  jungleClasses.Kingdom.Lion.prototype = new jungleClasses.Kingdom.AnimalClass();

  jungleClasses.Kingdom.Bear = function() {
    this.class = "Bear";
    this.type = "4-legged";
    this.damage = 60;
    this.health = 70;
  };
  jungleClasses.Kingdom.Bear.prototype = new jungleClasses.Kingdom.AnimalClass();

  jungleClasses.Kingdom.Python = function() {
    this.class = "Python";
    this.type = "Ground-hugger";
    this.damage = 75;
    this.health = 50;
  };
  jungleClasses.Kingdom.Python.prototype = new jungleClasses.Kingdom.AnimalClass();

  jungleClasses.Kingdom.Viper = function() {
    this.class = "Viper";
    this.type = "Ground-hugger";
    this.damage = 80;
    this.health = 40;
  };
  jungleClasses.Kingdom.Viper.prototype = new jungleClasses.Kingdom.AnimalClass();

  jungleClasses.Kingdom.Eagle = function() {
    this.class = "Eagle";
    this.type = "2-Winged";
    this.damage = 40;
    this.health = 110;
  };
  jungleClasses.Kingdom.Eagle.prototype = new jungleClasses.Kingdom.AnimalClass();

  jungleClasses.Kingdom.Hawk = function() {
    this.class = "Hawk";
    this.type = "2-Winged";
    this.damage = 30;
    this.health = 100;
  };
  jungleClasses.Kingdom.Hawk.prototype = new jungleClasses.Kingdom.AnimalClass();

  return jungleClasses;

})(Jungle || {});