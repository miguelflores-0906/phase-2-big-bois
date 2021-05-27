const e = require('express');
const db = require('../models/db.js');
const mongoose = require("mongoose");
const Reply = require('../models/ReplyModel.js');
const mongodb = require("mongodb");

const replyController = {

    newReply: function (req, res) {

        var replierUsername = req.body.poster_username;
        var repliedPostId = req.body.repliedPostId
        var body_var = req.body.body;
        
        var post = {
            replier_username: replierUsername,
            body: body_var,
            replying_to: repliedPostId,
            gamerscore: 0
        }
        db.insertOne(Reply, post, function(flag) {
            if(flag){
                res.send("it worked");
            }
            else
            {
                res.send(flag);
            }
        });
    },

    getReply: function (req, res) {


        var repliedPostId = req.body.repliedPostId;

        db.findMany(Reply, {replying_to: repliedPostId}, "poster_username body gamerscore", function (result) {
            res.send(result);
        });
    },

}
module.exports = replyController;
