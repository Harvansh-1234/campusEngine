const jwt = require("jsonwebtoken");
const {
  unauthorizedResponse,
  serverErrorResponse,
} = require("../utils/response");

const userValidate = (req, res, next) => {
  try {
    // validate token
    const data = jwt.decode(req.headers.authorization);
    if (data.userType === undefined || data["userType"] !== "user") {
      return unauthorizedResponse(res, "Access Denied");
    }

    console.log(data);

    // validate token
    const token = req.headers.authorization;
    console.log(token);
    console.log(process.env.JWT_SECRET_KEY);

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(verified);
    if (!verified) {
      return unauthorizedResponse(res, "Access Denied");
    }
    req.userId = jwt.decode(req.headers.authorization)["userId"];
    next();
  } catch (error) {
    console.log(`Error occured while user validation : ${error.message}`);
    return serverErrorResponse(res, error.message);
  }
};

const companyValidate = (req, res, next) => {
  try {
    // validate token
    const data = jwt.decode(req.headers.authorization);
    if (data.userType === undefined || data["userType"] !== "company") {
      return unauthorizedResponse(res, "Access Denied");
    }

    console.log(data);

    // validate token
    const token = req.headers.authorization;
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verified) {
      return unauthorizedResponse(res, "Access Denied");
    }
    req.userId = jwt.decode(req.headers.authorization)["userId"];
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

const commonValidate = (req, res, next) => {
  try {
    // validate token
    const data = jwt.decode(req.headers.authorization);
    if (
      data.userType === undefined ||
      !(
        data["userType"] === "user" ||
        data["userType"] === "company" ||
        data["userType"] === "admin"
      )
    ) {
      return unauthorizedResponse(res, "Access Denied");
    }

    console.log(data);

    // validate token
    const token = req.headers.authorization;
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verified) {
      return unauthorizedResponse(res, "Access Denied");
    }
    req.userId = jwt.decode(req.headers.authorization)["userId"];
    next();
  } catch (error) {
    console.log(`Error occured while user validation : ${error.message}`);
    return serverErrorResponse(res, error.message);
  }
};

module.exports = {
  userValidate,
  companyValidate,
  commonValidate,
};
