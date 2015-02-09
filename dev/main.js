'use strict'


var gayz = [
  "Shane",
  "Alice",
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
  "Marina",
  "Tasha",
  "boi",
  "alternative lifestyle haircut",
  "tattoos",
  "pillow queen",
  "Dinah Shore",
  "boobs",
  "sports-bra",
  "pride",
  "rainbow",
  "glitter",
  "queer",
  "gaycation",
  "beard",
  "queer",
  "gay",
  "bi",
  "trans",
  "pansexual",
  "LGBTQIA",
  "gaybies",
  "drag king",
  "drag queen",
  "RuPaul",
  "drag show",
  "gay bar",
  "Stonewall",
  "gay",
  "ghey",
  "top",
  "bottom",
  "spaghetti",
  "heteroflexible",
  "Britney",
  "Christina",
  "Lady Gaga",
  "Madonna",
  "Queer As Folk",
  "sweeps week",
  "Jenny Owens Young",
  "twink",
  "hard femme",
  "tomboy",
  "leather",
  "bear",
  "bug chaser",
  "rent boy",
  "gurl",
  "Emmett",
  "Michael",
  "Brian",
  "Kinney",
  "Looking",
  "GLAAD",
  "Patrick",
  "Dom",
  "Augustine",
  "Dorris",
  "Richie",
  "agenda",
  "Happy Holigays",
  "Rosie",
  "Ellen",
  "DeGeneres",
  "Page",
  "gaydar",
  "lesbian",
  "down-low",
  "Nicki Minaj",
  "Beyoncé",
  "Bette Midler",
  "Cher",
  "Laverne Cox",
  "Janet Mock",
  "brunch",
  "veganism",
  "flannel",
  "slouchy beanies",
  "combat boots",
  "Harvey Milk",
  "gender",
  "androgyny",
  "Liza Minnelli",
  "Judy Garland",
  "campy",
  "genderqueer",
  "Meryl Streep",
  "Neil Patrick Harris",
  "George Takei",
  "rugby",
  "softball",
  "Megan Rapinoe",
  "Cyndi Lauper",
  "Melissa Etheridge",
  "Subaru",
  "Castro",
  "Boystown",
  "triangle",
  "Trevor Project",
  "GSA",
  "PFLAG",
  "marriage equality",
  "dapper",
  "bowtie",
  "tacos",
  "fish",
  "engaygement",
  "you\'re a wanker number 9",
  "quinoa"
];

var dirty = [
  "fisting",
  "dildo",
  "fucking",
  "strap-on",
  "fuckin' Jenny",
  "rimjob"
];


var randInt = function(num) {
  return Math.floor((Math.random() * num));
};

var processing = function() {
  // processing stuff here lulz

  function eliminateDuplicates(arr) {
    var i,
        len=arr.length,
        out=[],
        obj={};

    for (i=0;i<len;i++) {
      obj[arr[i]]=0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
};

var punctuation = function() {
  var characters = ['.','!','?'];

  var x = randInt(characters.length);
  return characters[x];
};

var makeSentence = function(numWords) {
  var words = [];

  for (var i = 0; i < numWords; i++) {
    words.push(gayz[randInt(gayz.length)]);
  }

  var string = words.join().replace(/,/g , ' ');
  console.log(string[0]);
  string = string[0].toUpperCase() + string.slice(1) + punctuation();
  return string;
};

var makeParagraph = function(numSentence, numWords) {
  var sentences = [];
  var maxSentenceLength = numWords || 10;
  var sentenceLength = randInt(maxSentenceLength);
  for (var i = 0; i < numSentence; i++) {
    sentences.push(makeSentence(sentenceLength));
  }

  // something like this;
  var string = sentences.join().replace(/,/g , ' ');;
  return string;
};


$(document).on('ready', function() {
  $('#gay-generator').on('click', function(event) {
    event.preventDefault();

    var numberGays = $('#numberGays').val();

    // empty container div
    $('.outcome').empty();

    // append as many paragraphs
    if ($('#selectGay').val() === 'paragraph') {
      for (var i = 0; i < numberGays; i++) {
        $('.outcome').append("<p>" + makeParagraph(5) + "</p>");
      };
    }
    // or words
    else {
      $('.outcome').append("<p>" + makeSentence(numberGays) + "</p>");     
    }
  });

});