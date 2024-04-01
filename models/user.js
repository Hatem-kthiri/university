const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required: function () {
      return this.role !== "admin";
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  groups: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: function () {
      return this.role == "student";
    },
  },
  role: {
    type: String,
    enum: ["admin", "professor", "student"],
  },
  address: {
    type: String,
    required: function () {
      return this.role == "professor" || this.role == "student";
    },
  },
  phoneNumber: {
    type: Number,
    required: function () {
      return this.role == "professor" || this.role == "student";
    },
  },
  elimination: [
    {
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject",
      },
      absenceCount: 0,
    },
  ],
  classToTeach: [
    {
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "groups",
        required: function () {
          return this.role == "professor";
        },
      },
    },
  ],
  listofabscences:[
    {
       
    }
  ]

});

module.exports = mongoose.model("User", userSchema);
