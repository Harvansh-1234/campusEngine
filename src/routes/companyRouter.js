const express = require("express");
const {
  createJobPost,
  listCompanyJobs,
  getJobPost,
} = require("../controllers/company.controller");
const { userInfo, updateUserInfo } = require("../controllers/user.controller");
const { companyValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getCompanyInfo", companyValidate, userInfo);
router.post("/updateCompanyInfo", companyValidate, updateUserInfo);
router.post("/createJob", companyValidate, createJobPost);
router.get("/listCompanyJob", companyValidate, listCompanyJobs);
router.post("/getJobInfo", companyValidate, getJobPost);

module.exports = router;
