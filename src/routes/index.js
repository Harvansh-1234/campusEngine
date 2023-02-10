const authRouter = require("./authRouter");
const userRouter = require("./userRouter");

const express = require("express");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
