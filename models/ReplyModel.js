var mongoose = require("mongoose");

var ReplySchema = new mongoose.Schema(
{
    post_id:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Post",
        required: true
    },
    text:
    {
        type: String,
        required: true
    },
    reply_to_id:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Reply",
        required: false
    }
});

module.exports = mongoose.model("Reply", ReplySchema);