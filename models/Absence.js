const mongoose = require("mongoose");

const absenceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  time: {
    type: Date,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  situation: {
    type: String,
    default: "absente",
  },
});

const absence = mongoose.model("absence", absenceSchema);
module.exports = absence;
