const express = require("express");
const {
  userInfo,
  updateUserInfo,
  createResume,
  createQuiz,
  getResume,
  updateResumeByStudentId,
  getQuiz,
  getAppliedJobs,
  getAllQuiz,
  getAllEligibleJobs,
  getstudents,
  applyJob,
  OffCampusJobPost,
} = require("../controllers/user.controller");
const {
  userValidate,
  commonValidate,
} = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getUserInfo/:id", userInfo);
router.post("/updateUserInfo", userValidate, updateUserInfo);
router.post("/createResume", userValidate, createResume);
router.post("/createQuiz", userValidate, createQuiz);
router.get("/getResume", userValidate, getResume);
router.post("/updateResume", userValidate, updateResumeByStudentId);
router.post("/getQuiz", userValidate, getQuiz);
router.get("/getAppliedJobs", userValidate, getAppliedJobs);
router.get("/getAllQuiz", userValidate, getAllQuiz);
router.get("/getAllEligibleJobs", userValidate, getAllEligibleJobs);
router.get("/getstudents", getstudents);
router.post("/applyJob", userValidate, applyJob);
router.get("/getAllOffCampusJobs", userValidate, OffCampusJobPost);


module.exports = router;
