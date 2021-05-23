const e = require('express');
const db = require('../models/db.js');
const mongoose = require("mongoose");
const Post = require('../models/PostModel.js');
const mongodb = require("mongodb");

const postController = {

    newPost: function (req, res) {

        var poster_id = req.body.userid;
        var title = req.body.title;
        var body = req.body.body;
        var board = req.body.board;
        
        var post = {
            poster_id: poster_id,
            body: body,
            board: board,
            title: title
            
        }
        console.log(post);
        db.insertOne(Post, post, function(flag){
            if(flag){
                res.send("it worked");
            }
            else
            {
                console.log("didnt work");
                res.send(flag);
            }
        });
    },

    findPost: function (req, res) {

        var username = req.body.username;

        db.findOne(User, {username: username}, 'username', function (result) {
            res.send(result);
        });
    },

}
module.exports = postController;
