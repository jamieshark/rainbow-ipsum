'use strict'

var gays = [
  "Shane",
  "Alice",
  "gay",
  "ghey",
  "unicorns",
  "scissoring",
  "Tegan",
  "Sara",
  "mullet",
  "uhaul",
  "family",
  "cat",
  "Gloria Steinem",
  "feminist",
  "femme",
  "butch",
  "chapstick",
  "rainbow",
  "glitter",
  "Broadway",
  "Ilene Chaiken",
  "Bette",
  "Tina",
  "Helena",
  "Jenny",
  "crying",
  "laughing",
  "loving",
  "fighting",
  "kissing",
  "processing",
  "feelings",
  "feeling",
  "Carmen",
  "Robyn",
  "Dana",
  "Max",
  "Tasha",
  "boi",
  "alternative lifestyle haircut",
  "tattoos"
];

var dirty = [
  "fisting",
  "dildo",
  "fucking",
  "strap-on",
  "fuckin' Jenny"
];

var randInt = function(num) {
  return Math.floor((Math.random() * num));
};

var processing = function() {
  // processing stuff here lulz
};

var makeSentence = function(numWords) {
  var words = [];

  for (var i = 0; i < numWords; i++) {
    words.push(gays[randInt(gays.length)]);
  }

  var string = words.join().replace(/,/g , ' ');
  string = string[0].toUpperCase() + string.slice(1) + '.';
  return string;
};

var makeParagraph = function(numSentence, numWords) {
  var sentences = [];
  var sentenceLength = numWords || 10;
  for (var i = 0; i < numSentence; i++) {
    sentences.push(makeSentence(10));
  }

  // something like this;
  var string = sentences.join().replace(/,/g , ' ');;
  return string;
};


var lezbos = makeParagraph(3);
var replaceText = function() {
  document.getElementById('test').innerHTML = lezbos;
};
