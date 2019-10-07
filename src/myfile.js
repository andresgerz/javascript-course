let cars = 15000;

// module.exports.cars = cars;
// module.exports.greeting = function(){
//   console.log("This is my file and I need to export it");
// };

module.exports = {
  car : cars,
  time : () => console.log("The date is: ",Date())
}
