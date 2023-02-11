const express = require("express");
const { userInfo, updateUserInfo } = require("../controllers/user.controller");
const { companyValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getCompanyInfo", companyValidate, userInfo);
router.post("/updateCompanyInfo", companyValidate, updateUserInfo);

module.exports = router;
