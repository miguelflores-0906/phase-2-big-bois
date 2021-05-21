var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema(
{
    poster_id:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    title:
    {
        type: String,
        required: true
    },
    body:
    {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Post", PostSchema);
