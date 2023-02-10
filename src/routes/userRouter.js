const express = require("express");
const { userInfo, updateUserInfo } = require("../controllers/user.controller");
const { userValidate } = require("../middlewares/authmiddleware");
const router = express.Router();

router.get("/getUserInfo", userValidate, userInfo);
router.post("/updateUserInfo", userValidate, updateUserInfo);

module.exports = router;
