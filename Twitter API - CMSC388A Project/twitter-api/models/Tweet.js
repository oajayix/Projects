var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/*Defines what a Tweet would look like */

var TweetSchema = new Schema(
    {
        dislikes: {type: Number, required: true},
        likes: {type: Number, required: true},
        content: {type: String, required: true, max: 100}
       
    }
)

var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;