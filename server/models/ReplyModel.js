var mongoose = require("mongoose");

var ReplySchema = new mongoose.Schema(
{
    // id of the post to be replied to
    replying_to: 
    {
        type: String,
        required: true
    },
    // username of the replier
    replier_username:
    {
        type: String,
        required: true
    },
    // content of the reply
    body:
    {
        type: String,
        required: true
    },
    // score of the reply
    gamerscore:
    {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("Reply", ReplySchema);