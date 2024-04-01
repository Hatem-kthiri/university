const mongoose = require("mongoose");

const groupsSchema = new mongoose.Schema({
  nameOfGroup: {
    type: String,
    required: true,
    unique: true,
  },
});

const groups = mongoose.model("groups", groupsSchema);
module.exports = groups;
