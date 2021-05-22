const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const loginController = {

    postLogin: function (req, res) {

        var username = req.body.username;
        var password = req.body.password;

        var user = {
            username: username,
            password: password,
        }

        db.findOne(User, user, null ,function(result)
    {
        if(result != null)
            res.send("login works\n" + "username = " + username + "\npassword = " + password);
        else
            res.send("invalid credentials");
    });
    }
}
module.exports = loginController;
