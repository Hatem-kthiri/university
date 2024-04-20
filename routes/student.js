const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const isAuth = require("../middlewares/auth"); // Middleware pour authentification et vérification du rôle étudiant
const Note = require("../models/Notes");
const Timetable = require("../models/timetable");
const Absence = require("../models/absence");
const Course = require("../models/Course");

module.exports = router;
