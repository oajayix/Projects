/*Variables*/
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var app = express();
var moment = require('moment');
var marked = require('marked');
/*The data variables*/
var dataUtil = require("./data-util");
var _DATA = dataUtil.loadData().blog_posts;

/*Middleware here*/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

/* Add whatever endpoints you need! Remember that your API endpoints must
 * have '/api' prepended to them. Please remember that you need at least 5
 * endpoints for the API, and 5 others.
 */

app.get("/", function(req, res) {
  /*Getting the tags and and the home page*/
  var tags = dataUtil.getAllTags(_DATA);
  res.render('home', {data : _DATA, tags : tags});
});

/*This calls the handlebars*/
app.get("/create", function(req, res) {
  console.log("create");
  1
  res.render('create');
});

/*This is the endpoint of the create function*/
app.post('/create', function(req, res) {
  var body = req.body;

  // Transform tags and content
  body.tag = body.tag.split(" ");
  body.content = marked(body.content);

  // Add time and preview
  body.preview = body.content.substring(0, 300);
  body.time = moment().format('MMMM Do YYYY, h:mm a');

  // Save new blog post
  _DATA.push(req.body);
  dataUtil.saveData(_DATA);
  res.redirect("/");
});

/*The other handlebars for the differnt tabs*/

/*Shows all the Game*/
app.get('/Games', function(req, res) {
  console.log("games");
  res.render('games', {data : _DATA});
});
/*Shows the best Games*/
app.get("/BestGames", function(req, res) {
  var game_object = [];
  var max = 0;

  for (var property in _DATA) {
    if (max < _DATA[property].rating) {
      max = _DATA[property].rating;
    }
  }

  for (var property in _DATA) {
    if (max == _DATA[property].rating) {
      game_object.push(_DATA[property]);
    }
  }
  res.render('games', {data : game_object});
});
/*Shows the most recent Games*/
app.get('/MostRecentGame', function(req, res) {
  var game_object = [];
  var max = 0;

  for (var property in _DATA) {
    if (max < _DATA[property].year) {
      max = _DATA[property].year;
    }
  }
  for (var property in _DATA) {
    if (max == _DATA[property].year) {
      game_object.push(_DATA[property]);
    }
  }

  res.render('games', {data : game_object});
});
/*Shows the oldest game */
app.get('/OldestGame', function(req, res) {
  var game_object = [];
  var min = 100000;

  for (var property in _DATA) {
    if (min > _DATA[property].year) {
      min = _DATA[property].year;
    }
  }
  for (var property in _DATA) {
    if (min == _DATA[property].year) {
      game_object.push(_DATA[property]);
    }
  }
  res.render('games', {data : game_object});
});
/*Show games based on studio*/
app.get('/FunGame', function(req, res) {
  var game_object = [];
  var max = 0;

  for (var property in _DATA) {
    if (max < _DATA[property].tag.length) {
      max = _DATA[property].tag.length;
    }
  }
  for (var property in _DATA) {
    if (max == _DATA[property].tag.length) {
      game_object.push(_DATA[property]);
    }
  }

  res.render('games', {data : game_object});
});
app.get('/api/getGames', function(req, res) { return res.json(_DATA); });
app.listen(3000, function() { console.log('Listening on port 3000!'); });
