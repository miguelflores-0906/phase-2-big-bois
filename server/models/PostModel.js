var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PostSchema = new Schema(
{
    poster_username:
    {
        type: String,
        required: true
    },
    body:
    {
        type: String,
        required: false
    },
    board:
    {
        type: String,
        required: true
    },
    title:
    {
        type: String,
        required: true
    },
    gamerscore:
    {
        type: Number,
        default: 0,
        required: true
    },
    expiry:
    {
        type: Date,
        default: Date.now,
        indexes: [{expires: '1440m'}],
    }
});

module.exports = mongoose.model("Post", PostSchema);
