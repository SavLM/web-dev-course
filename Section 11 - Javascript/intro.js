// Function Expression:
var sayBye = function() { // anonymous function
  console.log("Bye");
}
sayBye();

// Function Declaration:
function sayHello() {
  console.log("Hello");
}
sayHello();

// Can also do:
var sayWelcome = function welcome() { // limited use
  console.log("Welcome");
}
sayWelcome();

// w/ an argument
var saySomething = function(something) {
  console.log(something);
}
saySomething("something");

// w/ a return statement
function sum(a, b) {
  return a + b;
}
console.log( sum(3,4) );
