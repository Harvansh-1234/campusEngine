const jwt = require("jsonwebtoken");
const {
  unauthorizedResponse,
  serverErrorResponse,
} = require("../utils/response");

const userValidate = (req, res, next) => {
  try {
    // validate token
    
  
    const token = req.headers.authorization;
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verified) {
      return unauthorizedResponse(res, "Access Denied");
    }
    next();
  } catch (error) {
    console.log(`Error occured while user validation : ${error.message}`);
    return serverErrorResponse(res, error.message);
  }
};

// const adminValidate = (req, res, next) => {
//   try {
//     logFunction(0, "in admin validate");
//     const valid = validateToken(req.headers.authorization, "admin");
//     if (!valid) {
//       logFunction(0, "admin validation failed");
//       return unauthorizedResponse(res, "Access Denied");
//     }
//     req.userId = jwt.decode(req.headers.authorization)["userId"];
//     logFunction(0, "admin validation success");

//     next();
//   } catch (error) {
//     logFunction(0, `Error occured while admin validation: ${error.message}`);
//     return serverErrorResponse(res, error.message);
//   }
// };

module.exports = {
  userValidate,
};
