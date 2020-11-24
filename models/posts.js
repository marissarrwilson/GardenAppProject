const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, required: true, trim: true },
  status: { type: String, required: true },
  sqft: { type: Number, required: true },
  description: { type: String, required: true, trim: true },
  progress: { type: Number, required: true },
  postDate: { type: Date, default: Date.now },
  plantedDate: { type: Date },
  harvestDate: { type: Date }

});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;