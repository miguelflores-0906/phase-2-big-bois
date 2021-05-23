var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema(
{
    poster_id:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    text:
    {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Post", PostSchema);
