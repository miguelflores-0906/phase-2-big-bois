const db = require('../models/db.js');

const User = require('../models/UserModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const loginController = {

    postLogin: function (req, res) {

        var username = req.body.username;
        var password = req.body.password;

        // var user = {
        //     username: username,
        //     password: password,
        // }
        // console.log(user);
        db.findOne(User, {username, username}, null ,function(result){
            if(result != null){
                // console.log(result._id);
                bcrypt.compare(password, result.password, function(err, equal){
                    if(equal){
                        res.send(result._id);
                    }
                    else{
                        res.send("invalid credentials");
                    }
                });
            }
            
            else
                res.send("invalid credentials");
        });
    }
}
module.exports = loginController;
