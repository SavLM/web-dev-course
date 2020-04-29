var database = [
  {
    username: "Sav",
    password: "secreto"
  },
  {
    username: "Sam",
    password: "abc123"
  },
  {
    username: "Kat",
    password: "goat3"
  }
];

var newsFeed = [
  {
    username: "Bill",
    timeline: "Hi"
  },
  {
    username: "Sam",
    timeline: "I'm tired"
  },
  {
    username: "Kat",
    timeline: "Who likes pizza?"
  }
];

function isValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if(user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password!");
  }
}


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);
