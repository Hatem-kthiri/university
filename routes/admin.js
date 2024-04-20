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
    const { email, password } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else if (hash) {
        const admin = await User.create({
          fullName: "admin",
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
router.get("/get_group_list", async (req, res) => {
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

module.exports = router;
