const e = require('express');
const db = require('../models/db.js');
const mongoose = require("mongoose");
const Post = require('../models/ReplyModel.js');
const mongodb = require("mongodb");

const replyController = {

    newReply: function (req, res) {

        var poster_username = req.body.poster_username;
        var title = req.body.title;
        var body = req.body.body;
        
        var post = {
            poster_username: poster_username,
            body: body,
            title: title,
            gamerscore: 0
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

    getReply: function (req, res) {

        console.log(req.body.title)

        var title = req.body.title;

        db.findMany(Reply, {title: title}, "poster_username body gamerscore", function (result) {
            console.log(result);
            res.send(result);
        });
    },

}
module.exports = replyController;