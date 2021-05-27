const e = require('express');
const db = require('../models/db.js');
const mongoose = require("mongoose");
const Post = require('../models/ReplyModel.js');
const mongodb = require("mongodb");

const replyController = {

    newReply: function (req, res) {

        var poster_username = req.body.poster_username;
        var post_id = req.body.id;
        var body = req.body.body;
        
        var post = {
            poster_username: poster_username,
            body: body,
            post_id: post_id,
            gamerscore: 0
        }
        // console.log(post);
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

    getReply: function (req, res) {

        // console.log(req.body.title)

        var id = req.body.post_id;

        db.findMany(Post, {post_id: id}, "poster_username body gamerscore", function (result) {
            // console.log(result);
            res.send(result);
        });
    },

}
module.exports = replyController;
