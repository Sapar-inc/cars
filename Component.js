function Car(obj) {
    this.obj = obj;
  }
  Car.prototype.engineStart = function() {
    console.log(this.obj,"engine started");
  };
  Car.prototype.engineStop = function() {
    console.log(this.obj,"engine stoped");
  };
  

