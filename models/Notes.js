const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subjects",
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  note: {
    type: Number,
    required: true,
  },
  
});

const note = mongoose.model("note", noteSchema);
module.exports = Cours;
