const e = require('express');
const db = require('../models/db.js');
const mongoose = require("mongoose");
const Post = require('../models/PostModel.js');
const mongodb = require("mongodb");

const postController = {

    newPost: function (req, res) {

        var poster_username = req.body.poster_username;
        var title = req.body.title;
        var body = req.body.body;
        var board = req.body.board;
        
        var post = {
            poster_username: poster_username,
            body: body,
            board: board,
            title: title,
            gamerscore: 0
        }
        // console.log(post);
        db.insertOne(Post, post, function(flag){
            if(flag){
                res.send("it worked");
            }
            else
            {
                // console.log("didnt work");
                res.send(flag);
            }
        });
    },

    getPost: function (req, res) {

        // console.log(req.body.board)

        var board = req.body.board;

        db.findMany(Post, {board: board}, "poster_username title body gamerscore", function (result) {
            // console.log(result);
            res.send(result);
        });
    },

    idGetPost: function (req, res) {

        // console.log(req.body._id)

        var _id = req.body._id;

        db.findOne(Post, {_id: _id}, null, function (result) {
            // console.log(result);
            res.send(result);
        });
    },

    searchPost: function (req, res) {
        
        var title = req.body.title
        db.findMany(Post, {title: /title/}, "poster_username title body gamerscore", function(result) {
            
            res.send(result)
        })
    }

}
module.exports = postController;
