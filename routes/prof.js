const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const isAuth = require("../middlewares/auth");
const absence = require("../models/absence");
const Note = require("../models/Notes");

module.exports = router;
