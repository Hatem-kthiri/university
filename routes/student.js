const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const isAuth = require("../middleware/auth"); // Middleware pour authentification et vérification du rôle étudiant
const Note = require("../models/Notes");
const Timetable = require("../models/timetable");
const Absence = require("../models/Absence");
const Course = require("../models/Course");

// Route pour obtenir les notes de l'étudiant
router.get("/notes", isAuth, async (req, res) => {
  try {
    const notes = await Note.find({ student: req.user._id });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route pour obtenir la moyenne de l'étudiant
router.get("/average", isAuth, async (req, res) => {
  try {
    const notes = await Note.find({ student: req.user.id });
    const total = notes.reduce((acc, note) => acc + note.grade, 0);
    const average = total / notes.length;
    res.json({ average });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route pour obtenir l'emploi du temps de l'étudiant
router.get("/timetable", isAuth, async (req, res) => {
  try {
    const timetable = await Timetable.findOne({ groups: { $in: [groupId] } });
    res.json(timetable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route pour obtenir les absences de l'étudiant
router.get("/absences", isAuth, async (req, res) => {
  try {
    const absences = await Absence.find({ student: req.user._id });
    res.json(absences);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/courses/:groupId", isAuth, async (req, res) => {
  try {
    const groupId = req.params.groupId;
    // Find courses where the groups array contains the provided group ID
    const courses = await Course.find({
      groups: { $in: [groupId] },
    }).populate("groups");
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
