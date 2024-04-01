
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/auth");
const Admin = require("../models/admin");
const Student = require("../models/student");
const Professor = require("../models/professor");
const Class = require("../models/class");
const Grade = require("../models/grade");
const Absence = require("../models/absence");
require("dotenv").config();



// Add student
router.post("/admin/students/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const { name, age, grade } = req.body;
    const student = await Student.create({ name, age, grade });
    res.status(201).json({ status: true, message: "Student added successfully", data: student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Add professor
router.post("/admin/professors/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const { name, subject } = req.body;
    const professor = await Professor.create({ name, subject });
    res.status(201).json({ status: true, message: "Professor added successfully", data: professor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Update class for professor
router.put("/admin/professors/:professorId/classes/update", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const { professorId } = req.params;
    const { classId } = req.body;
    const professor = await Professor.findByIdAndUpdate(
      professorId,
      { $addToSet: { classes: classId } },
      { new: true }
    );
    res.status(200).json({ status: true, message: "Professor class updated successfully", data: professor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Add class to students
router.put("/admin/students/classes/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const { classId, studentIds } = req.body;
    const students = await Student.updateMany(
      { _id: { $in: studentIds } },
      { $addToSet: { classes: classId } }
    );
    res.status(200).json({ status: true, message: "Classes added to students successfully", data: students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Get all grades and absences of students
router.get("/admin/students/grades-and-absences", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const grades = await Grade.find().populate("student");
    const absences = await Absence.find().populate("student");
    res.status(200).json({ status: true, grades, absences });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

module.exports = router;
