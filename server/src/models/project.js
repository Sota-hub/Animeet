const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ID = mongoose.Types.ObjectId;

const User = mongoose.model("user");
const Comment = mongoose.model("comment");
const Announce = mongoose.model("announce");

const ProjectSchema = new Schema({
  // validate at client side regarding 「required」
  _id: { type: ID, unique: true, immutable: true },
  project_image_path: String,
  project_name: String,
  project_description: String,
  support_current: Number,
  support_target: Number,
  reminded_users_id: [ID],
  expire_date: String,
  category: String,
  story: String,
  character_design_path: [String],
  original_picture_path: [String],
  voice_path: String,
  sound_effect_path: String,
  creators_id: [ID],
  creators: [User],
  comments: [Comment],
  announces: [Announce],
});

mongoose.model("project", ProjectSchema);
