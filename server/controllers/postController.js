const db = require('../models/db.js');

const Post = require('../models/postModel.js');

const postController = {

    postRegister: function (req, res) {

        var _id = userid;
        var title = req.body.title;
        var body = req.body.body;
        var board = req.body.board;
        
        var post = {
            _id: _id,
            title: title,
            body: body,
            board: board
        }
        console.log(post);
        db.insertOne(Post, post, function(flag){
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
module.exports = postController;
