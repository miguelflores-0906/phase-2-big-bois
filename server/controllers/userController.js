const db = require('../models/db.js');
const mongodb = require("mongodb");
const User = require('../models/UserModel.js');
const mongoose = require("mongoose");
const Post = require('../models/PostModel.js');

const userController = {

    postFindUser: function (req, res) {

        // console.log("in finduser");
        // var _id = ObjectId(req.body._id);
        var username = req.body.username;
        console.log("objectid assigned");
        db.findOne(User, {username: username}, null, function (result) {
            // console.log(result);
            res.send(result);
        });
    },

    getUserPosts: function (req, res) {

        // console.log(req.body.username)

        var poster_username = req.body.poster_username;

        db.findMany(Post, {poster_username: poster_username}, null, function (result) {
            // console.log(result);
            res.send(result);
        });
    },

    addGamerscore: function(req, res){
        var username = req.body.username;
        db.updateOne(User,{username: username}, {$inc:{gscore: 1}}, function(result){
            if(result)
                res.send("gamerscore incremented");
            else
                res.send("addGamerscore failed");
        });
        
    }
}
module.exports = userController;