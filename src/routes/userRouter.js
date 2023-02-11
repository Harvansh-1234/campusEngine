const express = require("express");
const {
  userInfo,
  updateUserInfo,
  createResume,
} = require("../controllers/user.controller");
const { userValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getUserInfo", userValidate, userInfo);
router.post("/updateUserInfo", userValidate, updateUserInfo);
router.post("/createResume", userValidate, createResume);
module.exports = router;
