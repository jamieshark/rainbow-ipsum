(function() {
  'use strict'

  var gayGenerator = function gayGenerator() {
    this.nsfw = false,
    this.gayz = [
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
      "quinoa",
      "Carmilla",
      "Laura Hollis",
      "Elise Bauman",
      "Carmilla Karnstein",
      "Natasha Negovanlis",
      "Lola Perry",
      "S\. LaFontaine",
      "Danny Lawrence",
      "Buffy",
      "Willow",
      "Tara",
      "South of Nowhere",
      "Faking It",
      "Amy Raudenfeld",
      "Karma Ashcroft",
      "Karma and Amy",
      "Amy and Reagan",
      "Emily and Naomi",
      "Naomily",
      "lezbros",
      "West Hollywood",
      "WeHo",
      "The Abbey",
      "Truckstop",
      "The L Word",
      "The Real L Word",
      "Jeanie",
      "Whitney and Sara",
      "meow",
      "cats",
      "cat",
      "kitten",
      "Blue is the Warmest Color"
    ],
    this.dirty = [
      "fisting",
      "dildo",
      "fucking",
      "strap-on",
      "fuckin' Jenny",
      "rimjob"
    ];
  }


  gayGenerator.prototype = {

    // get a random number (non-zero)
    randInt: function(num) {
      return Math.floor((Math.random() * num) + 1);
    },

    // set config nsfw to true
    makeItDirty: function() {
      var self  = this;
      self.nsfw = true;
    },

    // processing stuff here lulz
    processing: function() {
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
    },

    // have yourself some punctuation
    punctuation: function() {
      var self = this;
      // extra array entry to offset randInt
      // also known as struck by the lazies.
      var characters = ['.', '.', '!','?'];

      var x = self.randInt(characters.length - 1);
      return characters[x];
    },

    // make a gay ass sentence
    makeSentence: function(numWords) {
      var words = [],
          self  = this;

      var gayz  = self.gayz;

      if (self.nsfw === true) {
        gayz = gayz.concat(self.dirty);
      }

      for (var i = 0; i < numWords; i++) {
        words.push(gayz[self.randInt(gayz.length)]);
      }

      var string = words.join().replace(/,/g , ' ');

      // Upper case dat trick and add some radical punctuation!?

      string = string[0].toUpperCase() + string.slice(1) + self.punctuation();  

      return string;
    },
    makeParagraph: function(numSentence, numWords) {
      var sentences         = [],
          maxSentenceLength = numWords || 10,
          self              = this;

      var sentenceLength = self.randInt(maxSentenceLength)

      for (var i = 0; i < numSentence; i++) {
        sentences.push(self.makeSentence(sentenceLength));
      }

      var string = sentences.join().replace(/,/g , ' ');;
      return string;
    }
  }

  // DOM stuff
  $(document).on('ready', function() {

    // ooo pretty rainbows
    var randomColors = ['#FF0036','#FFAA00','#dfdf04','#BCE400','#0080FF','#FF007F','#7A00E5','#FF00FF']
    var r = Math.floor((Math.random()*randomColors.length));
    $('.header').css('background-color', randomColors[r]);

    var randomColors = ['#FF0036','#FFAA00','#dfdf04','#BCE400','#0080FF','#FF007F','#7A00E5','#FF00FF']
    var r = Math.floor((Math.random()*randomColors.length));
    $('.outcome').css('background-color', randomColors[r]);

    var randomColors = ['#FF0036','#FFAA00','#dfdf04','#BCE400','#0080FF','#FF007F','#7A00E5','#FF00FF']
    var r = Math.floor((Math.random()*randomColors.length));
    $('.heart').css('color', randomColors[r]);

    // copyright
    var today = new Date();
    var year  = today.getFullYear();
    document.getElementById('copyright').innerHTML = "&copy; " + year;


    $('#gay-generator').on('click', function(event) {
      event.preventDefault();
      var numberGays = $('#numberGays').val();
      var rainbowIpsum = new gayGenerator();

      if ($('#nsfw').is(':checked')) {
        rainbowIpsum.makeItDirty();
      }
      // empty container div
      $('.outcome').empty();

      // append as many paragraphs
      if ($('#selectGay').val() === 'paragraph') {
        for (var i = 0; i < numberGays; i++) {
          $('.outcome').append("<p>" + rainbowIpsum.makeParagraph(5) + "</p>");
        };
      }
      // or sentences
      else {
        for (var i = 0; i < numberGays; i++) {
          $('.outcome').append("<p>" + rainbowIpsum.makeSentence(6) + "</p>");
        };
      }
    });
  });
})();



