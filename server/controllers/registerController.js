const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const registerController = {

    postRegister: function (req, res) {

        var username = req.body.username;
        var password = req.body.password;
        var gscore = 0;
        
        var user = {
            username: username,
            password: password,
            gscore: gscore,
        }
        console.log(user);
        db.insertOne(User, user, function(flag){
            if(flag){
                res.send("it worked");
            }
        });
        
        // db.insertOne(User, user, function(flag) {
        //     if(flag) {

        //         // res.redirect('/su=ccess?fName' + fName +'&lName=' + lName + '&idNum=' + idNum); //change response to success using react stuff
        //     }
        // });
    },

    postCheckUser: function (req, res) {

        var username = req.body.username;

        db.findOne(User, {username: username}, 'username', function (result) {
            res.send(result);
        });
    },

}
module.exports = registerController;
