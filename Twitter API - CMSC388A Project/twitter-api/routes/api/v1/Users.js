var express = require('express');
var userRouter = express.Router();
const db = require('./../../../index');
//let User = require('../../../models/user')
//let Tweet = require('../../../models/tweet')
var user_controller = require( '../../../controllers/UserController')



/* /api/v1/users - this will return all the documents inside the users collection. */
//usersRouter.get("/api/v1/users", function(req, res){
//});
userRouter.route('/users')
.get(user_controller.user_list);

/* /api/v1/user  - this will generate a new user document inside of the users collection. */

//usersRouter.post("/api/v1/user", function(req, res){
//});
userRouter.route('/user')
//.post(user_controller.validate)
.post(user_controller.create_user);


/* /api/v1/tweets - this will return all the documents inside the tweets collection. */
//usersRouter.get("/api/v1/tweets", function(req, res){
//});
userRouter.route('/tweets')
.get(user_controller.tweet_list)

/* /api/v1/user/:id - this will generate a new document inside the tweets collection as well as generate a reference to the document inside the users collection that has a value of :id for its _id field. */
//userRouter.post("/api/v1/user/:id", function(req, res){
//});
userRouter.route('/user/:id')
.post(user_controller.validate)
.post(user_controller.create_tweet)



/* /api/v1/users/:id - this will return the document that matches the :id request param as well as all the tweets that it references. Note: the operation that you will be performing in this endpoint inside of mongo is identical to a join method in a tradition SQL database. */
//userRouter.get("/api/v1/users/:id", function(req, res){ 
//});
userRouter.route('/users/:id')
.get(user_controller.get_user)


module.exports = userRouter;

