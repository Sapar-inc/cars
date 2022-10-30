carObj1 = {
    model: "Mercedes",
    color: "Red",
    yers: 2014,
}
carObj2 = {
    model: "Toyota",
    color: "White",
    yers: 2012,
}
  let engineStart = new Car(Object.values(carObj1).join().replaceAll(","," "));
  engineStart.engineStart();
  
  let engineStopt = new Car(Object.values(carObj2).join().replaceAll(","," "));
  engineStopt.engineStop();

  
  



