function myFunction(arg) {
  //Only change code below this line
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
  }
  delete lion[arg];
    return lion;
    }
    
  //Only change code above this line

console.log(myFunction("roar"));
module.exports = myFunction;
