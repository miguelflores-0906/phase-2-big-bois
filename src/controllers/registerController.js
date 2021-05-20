const db = require("../models/db.js");
const Post = require("../models/PostModel.js");
const Reply = require("../models/ReplyModel.js");
const User = require("../models/UserModel.js");

const registerController =
{
    postRegister: function(req, res)
    {
        var username = req.body.username;
        var password = req.body.password;
        var gscore = 0;

        var user =
        {
            username: username,
            password: password,
            gscore: gscore
        }

        db.insertOne(User, user, function(flag)
        {
            if(flag)
            {
                //redirect after successful register
            }
        });
    }
}