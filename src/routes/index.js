const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const companyRouter = require("./companyRouter");

const express = require("express");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/company", companyRouter);

module.exports = router;
