const Joi_Scehmas = require("../joi/auth/index");
const { createUser, getUserByEmail } = require("../repository/user.repo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  badRequestResponse,
  handle304,
  serverErrorResponse,
  successResponse,
  notFoundResponse,
} = require("../utils/response");
const { createResumeRepo } = require("../repository/resume.repo");

// signup user
const userSignup = async (req, res) => {
  try {
    console.log(req.body);
    let [err, hash] = await _createHash(req.body.password);
    if (err) {
      console.log(`Error in create hash: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    req.body.password = hash;
    let [err1, newUser] = await createUser(req.body);
    if (err1) {
      console.log(`Error in create user route: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    if (newUser.userType === "user") {
      // create resume
      console.log("user");
      let resumeData = {
        studentId: newUser._id,
        name: req.body.firstName + " " + req.body.lastName,
        contact: {
          email: req.body.email,
          phone: req.body.contactNo,
        },
      };

      let [err2, resume] = await createResumeRepo(resumeData);
      if (err2) {
        console.log(`Error in create resume: ${err2.message}`);
        return serverErrorResponse(res, err2.message);
      }
      newUser.resume = resume._id;
    }
    return successResponse(res, newUser, "User created successfully");
  } catch (err) {
    logFunction("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

// sign in user and verify password
const userSignin = async (req, res) => {
  try {
    let [err, user] = await getUserByEmail(req.body.email);
    if (err) {
      console.log(`Error in get user by email: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (user.length === 0) {
      return notFoundResponse(res, "User not found");
    }

    // verify passWord
    let [err1, isMatch] = await _verifyPassword(
      req.body.password,
      user[0].password
    );
    if (err1) {
      console.log(`Error in verify password: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    if (!isMatch) {
      return badRequestResponse(res, "Password is incorrect");
    }

    // generate jwt token
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
      time: Date(),
      userId: user[0]._id,
      email: user[0].email,
      _id: user[0]._id,
      userType: user[0].userType,
    };

    const token = jwt.sign(data, jwtSecretKey);
    user[0].token = token;
    console.log(token);
    let toReturn = {
      token: token,
      ...user[0]._doc,
    };
    return successResponse(res, toReturn, "User logged in successfully");
  } catch (err) {
    console.log("error: ", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

const _verifyPassword = async (password, hash) => {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return [null, isMatch];
  } catch (err) {
    console.log(`Error in verify password: ${err.message}`);
    return [err, null];
  }
};
const _createHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return [null, hash];
  } catch (err) {
    console.log(`Error in create hash: ${err.message}`);
    return [err, null];
  }
};

module.exports = {
  userSignup,
  userSignin,
};