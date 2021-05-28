var mongoose = require("mongoose");

var ReplySchema = new mongoose.Schema(
{
    post_id:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Post",
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
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '1440m' },
    }
});

module.exports = mongoose.model("Reply", ReplySchema);