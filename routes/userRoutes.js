const express = require("express");
const { getUserByEmail } = require("../controllers/authController");

const router = express.Router();

router.get("/:email", getUserByEmail);

module.exports = router;