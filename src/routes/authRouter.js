const express = require("express");
const { userSignup, userSignin } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", userSignup);
router.post("/signin", userSignin);

module.exports = router;
