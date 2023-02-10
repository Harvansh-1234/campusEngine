const express = require("express");
const { userInfo } = require("../controllers/user.controller");
const { userValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getUserInfo", userValidate, userInfo);

module.exports = router;
