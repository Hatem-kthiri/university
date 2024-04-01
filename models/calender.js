const mongoose = require("mongoose");

const calendrierSchema = new mongoose.Schema({
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  EventTo: {
    type: function () {
      return this.typeEvent == "Exam" ? [] : String;
    },
  },
  typeEvent: {
    type: String,
    enum: ["Event", "Exam"],
  },
  title: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
  },
});
const calendrier = mongoose.model("Calendrier", calendrierSchema);
module.exports = calendrier;
