const mongoose = require("mongoose");

const CoursSchema = new mongoose.Schema({
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "groups",
    },
  ],
  courseTitle: {
    type: String,
    required: true,
  },
  courseDetails: {
    type: String,
    required: true,
  },
  semestre: {
    type: Number,
    required: true,
  },
});

const Cours = mongoose.model("Cours", CoursSchema);
module.exports = Cours;
