const express = require("express");
const {
  userInfo,
  updateUserInfo,
  createResume,
  createQuiz,
  getResume,
  updateResumeByStudentId,
  getQuiz,
} = require("../controllers/user.controller");
const { userValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getUserInfo", userValidate, userInfo);
router.post("/updateUserInfo", userValidate, updateUserInfo);
router.post("/createResume", userValidate, createResume);
router.post("/createQuiz", userValidate, createQuiz);
router.get("/getResume", userValidate, getResume);
router.post("/updateResume", userValidate, updateResumeByStudentId);
router.post("/getQuiz", userValidate, getQuiz);
module.exports = router;