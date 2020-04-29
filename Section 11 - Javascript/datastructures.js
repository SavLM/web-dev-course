// Arrays
var animals = ["tiger", "cat", 3, "bear", true, ["a", "b", "c"]];
console.log(animals[0]);
// "tiger"
console.log(animals[2] + 4);
// 7
console.log(animals[1] + 4);
// cat4
console.log(animals[4]===true);
// true
console.log(animals[5][1]);
// b

console.log(animals.shift());
// "tiger"
console.log(animals);
// ["cat", 3, "bear", true, ["a", "b", "c" ]]

console.log(animals.pop());
// ["a", "b", "c" ]
console.log(animals);
// ["cat", 3, "bear", true]

console.log(animals.push("fox"));
// 5
console.log(animals);
// ["cat", 3, "bear", true, "fox"]

console.log(animals.concat(["elephant", "deer"]));
// ["cat", 3, "bear", true, "fox", "elephant", "deer"]

console.log(animals.sort());
// [ 3, "bear", "cat", "fox", true ]


// Objects
var person = {
  name: "Savannah",
  age: 24,
  hobby: "Violin",
  isMarried: false,
  shout: function() {
    console.log("Ahhhhhh!");
  }
};

console.log(person.name);
// "Savannah"

person.favouriteFood = "Eggplant";
console.log(person);
// Object { name: "Savannah", age: 24, hobby: "Violin", isMarried: false, favouriteFood: "Eggplant" }

person.age = person.age + 1;
console.log(person);
// Object { name: "Savannah", age: 25, hobby: "Violin", isMarried: false, favouriteFood: "Eggplant" }

// list of objects
var users = [
  {
    username: "sav",
    password: "secret"
  },
  {
    username: "jeff",
    password: "abc123"
  }
];

// methods are functions inside objects
person.shout();
// "Ahhhhhhhhh!"
