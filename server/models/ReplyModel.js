var mongoose = require("mongoose");

var ReplySchema = new mongoose.Schema(
{
    title:
    {
        type: String,
        required: true
    },
    poster_username:
    {
        type: String,
        required: true
    },
    body:
    {
        type: String,
        required: true
    },
    gamerscore:
    {
        type: Number,
        required: true,
        default: 0
    },
    replying_to:
    {
        type : String,
        required: true
    }
});

module.exports = mongoose.model("Reply", ReplySchema);