const { getUserById } = require("../repository/user.repo");
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

module.exports = { userInfo };
