const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  EventTo: {
    type: function () {
      return this.typeEvent == "Exam" ? [] : String;
    },
  },
  description: {
    type: String,
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
const calendar = mongoose.model("Calendar", calendarSchema);
module.exports = calendar;
