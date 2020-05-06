var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var pokeDataUtil = require("./poke-data-util");
var _ = require("underscore");
var app = express();
var PORT = 3000;

require('request');

// Restore original data into poke.json.
// Leave this here if you want to restore the original dataset
// and reverse the edits you made.
// For example, if you add certain weaknesses to Squirtle, this
// will make sure Squirtle is reset back to its original state
// after you restard your server.
pokeDataUtil.restoreOriginalData();

// Load contents of poke.json into global variable.
var _DATA = pokeDataUtil.loadData().pokemon;

/// Setup body-parser. No need to touch this.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get("/", function(req, res) {
  // HINT:
  var contents = "";
  var count = 0;
  var secondCount = 1;
  _.each(_DATA, function(i) {
    contents += `<tr><td>` + secondCount + `</td><td><a
       href="/pokemon/` +
                secondCount + `">` + _DATA[count].name + `</a></td></tr>\n`;
    count++;
    secondCount++;
  })
  var html =
      '<html>\n<body>\n<table>' + contents + '</table>\n</body>\n</html>';
  res.send(html);
  // res.send("UNIMPLEMENTED ENDPOINT");
});

app.get("/pokemon/:pokemon_id", function(req, res) {
  var _pokemonID = parseInt(req.params.pokemon_id);
  var poke_object;
  for (var property in _DATA) {
    if (_pokemonID == _DATA[property].id) {
      poke_object = _DATA[property];
    }
  }
  // console.log("Here is the poke_object" + poke_object);
  if (poke_object == undefined) {
    return res.send("Error: Pokemon not found");
  }
  // HINT :
  var contents = "";
  var count = 0;
  var poke_object_keys = Object.keys(poke_object);
  _.each(poke_object, function(i) {
    contents += `<tr><td>${poke_object_keys[count]}</td><td>${
        JSON.stringify(i)}</td></tr>\n`;
    count++;
  })
  var html =
      '<html>\n<body>\n<table>' + contents + '</table>\n</body>\n</html>';

  res.send(html);
});
/*Cleared*/
app.get("/pokemon/image/:pokemon_id", function(req, res) {
  var _id = parseInt(req.params.pokemon_id); /*Parse the Int */
  /*Very odd error check, so if the pokemon number is less then 100 you would
   * need to put a zero in front of it and if it's less then 10 we put two
   * zeros*/
  if (_id > 151 || _id < 0 || !Number.isInteger(_id)) {
    return res.send("Error: Pokemon not found");
  }
  if (_id < 100 && _id > 10) {
    var html =
        `<html><body><img src = "http://www.serebii.net/pokemongo/pokemon/0` +
        _id.toString() + `.png">
      </body>
</html>`;
  } else if (_id >= 100) {
    var html =
        `<html><body><img src = "http://www.serebii.net/pokemongo/pokemon/` +
        _id.toString() + `.png">
      </body>
</html>`;
  } else {
    var html =
        `<html><body><img src = "http://www.serebii.net/pokemongo/pokemon/00` +
        _id.toString() + `.png">
      </body>
</html>`;
  }

  res.send(html); /*Using the "." operator to just get the img link*/
});
/*Cleared*/
app.get("/api/id/:pokemon_id", function(req, res) {
  // This endpoint has been completed for you.
  var _id = parseInt(req.params.pokemon_id);
  var _poke_object;
  for (var property in _DATA) {
    if (_DATA[property].id == _id) {
      _poke_object = _DATA[property]
    }
  }
  if (_poke_object == undefined) {
    return res.json({});
  }
  return res.json(_poke_object);
});
/*Cleared*/
app.get("/api/evochain/:pokemon_name", function(req, res) {
  var _pokemon_name = req.params.pokemon_name; /*Gets the Pokemon name*/
  var result = _.where(_DATA, {name : _pokemon_name});
  if (result.length == 0) {

    return res.json([]);
  }
  var i;                /*Index*/
  var returnArray = []; /*Array to return*/
  var flag = false;
  var flag2 = false
  var poke_object;

  for (var property in _DATA) {
    if (_DATA[property].name == _pokemon_name) {
      poke_object = _DATA[property];
    }
  }

  if (_.size(poke_object.prev_evolution) > 0) {
    for (i = 0; i < _.size(poke_object.prev_evolution); i++) {
      returnArray.push(poke_object.prev_evolution[i].name);
    }
  }
  returnArray.push(poke_object.name);
  if (_.size(poke_object.next_evolution) > 0) {

    for (i = 0; i < _.size(poke_object.next_evolution); i++) {
      returnArray.push(poke_object.next_evolution[i].name);
    }
  }

  return res.send(returnArray);
});
/*Cleared*/
app.get("/api/type/:type", function(req, res) {
  var _type = req.params.type;
  /*This way does not work for some reason so, we'll do the looping way*/
  // var result = _.where(_DATA, {type : "[Fire]"});
  var i;
  var poke_array = []; /*Array where our pokemon will stay*/
  /*Looping through the Data and getting the type of each pokemon and then
   * pushing into the array*/
  for (var property in _DATA) {
    if (_DATA[property].type.includes(_type)) {
      poke_array.push(_DATA[property].name);
    }
  }
  res.send(poke_array);
});
/*Cleared*/
app.get("/api/type/:type/heaviest", function(req, res) {
  var _type = req.params.type;
  var flag = false;
  var max = 0; /*Starting Max*/
  var i;
  var compare;
  var compare_number;
  var return_pokes; /*Array where our pokemon will stay*/
  var poke_name;
  for (var property in _DATA) {
    if (_DATA[property].type.includes(_type)) {
      compare = (_DATA[property].weight).split(/.\d* kg/);
      compare_number = Number(compare[0]);
      if (compare_number > max) {
        max = compare_number;
        poke_name = _DATA[property].name;
        flag = true;
      }
    }
  }
  if (flag == true) {
    var return_poke_object;
    return_poke_object = {'name' : poke_name, 'weight' : max.toString()};
    return res.send(return_poke_object);
  } else {
    return res.send({});
  }
});
/*Cleared*/
app.post("/api/weakness/:pokemon_name/add/:weakness_name", function(req, res) {
  var _pokemon_name = req.params.pokemon_name;
  var _weakness_name = req.params.weakness_name;
  var test;
  var result = _.where(_DATA, {name : _pokemon_name});
  if (result.length == 0) {
    return res.json({});
  }

  /*Looping through all of the pokemon objects*/
  for (var property in _DATA) {
    if (_DATA[property].name == _pokemon_name) { /*If the names equal*/
      if (_DATA[property].weaknesses.includes(_weakness_name) ==
          false) { /*If they dont already have the weakness*/
        _DATA[property].weaknesses.push(_weakness_name);
      }                       /*Push*/
      test = _DATA[property]; /*Take*/
    }
  }
  /*Making the object to return*/
  var return_poke_object;
  console.log("Here: " + test);
  return_poke_object = {'name' : test.name, 'weaknesses' : test.weaknesses};
  /*Saves the data*/
  pokeDataUtil.saveData(_DATA);
  res.send(return_poke_object);
});

app.delete("/api/weakness/:pokemon_name/remove/:weakness_name", function(req,
                                                                         res) {
  var _pokemon_name = req.params.pokemon_name;
  var _weakness_name = req.params.weakness_name;
  var result = _.where(_DATA, {name : _pokemon_name});
  if (result.length == 0) {

    return res.json({});
  }

  /*Looping through all of the pokemon objects*/
  for (var property in _DATA) {
    if (_DATA[property].name == _pokemon_name) { /*If the names equal*/
      if (_DATA[property].weaknesses.includes(_weakness_name) == true) {
        _DATA[property].weaknesses = _DATA[property].weaknesses.filter(function(
            item) { return item !== _weakness_name })
      }
      var test = _DATA[property];
    }
  }
  var return_poke_object;
  return_poke_object = {'name' : test.name, 'weaknesses' : test.weaknesses};
  pokeDataUtil.saveData(_DATA);
  res.send(return_poke_object);
});

// Start listening on port PORT
app.listen(PORT,
           function() { console.log('Server listening on port:', PORT); });

// DO NOT REMOVE (for testing purposes)
exports.PORT = PORT
