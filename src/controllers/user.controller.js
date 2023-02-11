const { getUserById, updateUserById } = require("../repository/user.repo");
const {
  serverErrorResponse,
  notFoundResponse,
  successResponse,
} = require("../utils/response");

const userInfo = async (req, res) => {
  try {
    console.log(req.userId);
    let [err, user] = await getUserById(req.userId);
    console.log(user);
    if (err) {
      console.log(`Error in get user by id: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (user.length === 0) {
      return notFoundResponse(res, "User not found");
    }
    return successResponse(res, "User info", user[0]);
  } catch (err) {
    logFunction("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

// update userInfo controller
const updateUserInfo = async (req, res) => {
  try {
    let [err, user] = await getUserById(req.userId);
    if (err) {
      console.log(`Error in get user by id: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (user.length === 0) {
      return notFoundResponse(res, "User not found");
    }
    let [err1, user1] = await updateUserById(req.userId, req.body);
    if (err1) {
      console.log(`Error in update user by id: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, user1[0], "User info updated");
  } catch (err) {
    console.log("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

module.exports = { userInfo, updateUserInfo };
