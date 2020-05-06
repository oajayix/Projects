var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/*Defines what an individual user document would be like */

var UserSchema = new Schema(
    {
        name : {type: String, required: true, max: 100},
        login: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        email: {type: String, required: true, max: 100},
        tweets: [{  
            type: Schema.Types.ObjectId,  
            ref: 'Tweet'  
          }]
          
    }
);
var User = mongoose.model('User', UserSchema);
module.exports = User;