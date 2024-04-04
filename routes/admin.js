const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/auth");
const Group = require("../models/groups");
const Absence = require("../models/absence");
const User = require("../models/user");
const Note = require("../models/Notes");
require("dotenv").config();
router.post("/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else if (hash) {
        const admin = await User.create({
          firstName:"admin",
          email,
          password: hash,
          role: "admin",
        });
        res.status(201).json({
          status: true,
          message: "Admin Created ",
          data: admin,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});
// Add student
router.post("/admin/students/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      groups,
      address,
      phoneNumber,
      role,
    } = req.body;
    const student = await User.create({
      firstName,
      lastName,
      email,
      password,
      groups,
      address,
      phoneNumber,
      role,
    });
    res.status(201).json({
      status: true,
      message: "Student added successfully",
      data: student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Add professor
router.post("/admin/professors/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      classToTeach,
      role,
    } = req.body;
    const professor = await User.create({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      classToTeach,
      role,
    });
    res.status(201).json({
      status: true,
      message: "Professor added successfully",
      data: professor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Update class for professor
router.put(
  "/admin/professors/:professorId/classes/update",
  isAuth,
  async (req, res) => {
    // Add logic to check if the logged in user is an admin
    try {
      const { professorId } = req.params;
      const { classId } = req.body;
      const professor = await User.findByIdAndUpdate(
        professorId,
        { $addToSet: { classToTeach: classId } },
        { new: true }
      );
      res.status(200).json({
        status: true,
        message: "Professor class updated successfully",
        data: professor,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
);

// Add class to students
router.put("/admin/students/classes/add", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const { classId, studentIds } = req.body;
    const students = await User.updateMany(
      { _id: { $in: studentIds } },
      { $addToSet: { classes: classId } }
    );
    res.status(200).json({
      status: true,
      message: "Classes added to students successfully",
      data: students,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Get  absences of students
router.get("/admin/students/Absences", isAuth, async (req, res) => {
  // Add logic to check if the logged in user is an admin
  try {
    const absences = await Absence.find().populate("student");
    res.status(200).json({ status: true, absences });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

// Create a group
router.post("/groups", async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all groups
router.get("/groups", async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single group by ID
router.get("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a group
router.put("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a group
router.delete("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json({ message: "Group deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get all notes
router.get("/Notes", isAuth, async (req, res) => {
  try {
    const notes = await Note.find({ addedBy: req.user._id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
