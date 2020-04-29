var letters = [
  "a",
  "f",
  "s"
]
// for loop
for (var i=0; i < letters.length; i++) {
  console.log(i);
}

// while loop
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}


// do while loop
do {
  console.log(count);
  count--;
} while (count > 0);


// for each
letters.forEach(function(index) {
  console.log(index);
})

// for each with defined function
function logLetters(letter) {
  console.log(letter);
}
letters.forEach(logLetters);
