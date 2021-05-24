const db = require('../models/db.js');
const mongodb = require("mongodb");
const User = require('../models/UserModel.js');
const mongoose = require("mongoose");

const userController = {

    postFindUser: function (req, res) {

        console.log("in finduser");
        // var _id = ObjectId(req.body._id);
        var _id = req.body._id;
        console.log("objectid assigned");
        db.findOne(User, {_id: _id}, "username", function (result) {
            res.send(result);
        });
    }
}
module.exports = userController;