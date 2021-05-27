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
    expireAfterSeconds:
    {
        type: Number,
        default: 20,
        required: true
    },
    createdAt:
    {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model("Post", PostSchema);
