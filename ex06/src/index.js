//Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
//End of lion object
function myFunction(arg1, arg2) {
  //Only change code below this line
  lion[arg1] = arg2;
  return lion;
  //Only change code above this line
}
console.log(myFunction("roar", "roar-roar")); //Change this line
module.exports = myFunction;
