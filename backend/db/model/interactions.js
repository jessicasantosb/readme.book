const mongoose = require("mongoose");
const InteractionSchema = new mongoose.Schema({
  likes: [
    {
      type: ObjectId,
      ref: "username",
    },
  ],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: ObjectId, ref: "username" },
    },
  ],
});
module.exports =
  mongoose.model.Interaction ||
  mongoose.model("Interaction", InteractionSchema);