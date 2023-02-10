const successResponse = (res, data, message) => {
  return res.status(200).json({
    code: 200,
    data: data,
    message: message,
  });
};

const serverErrorResponse = (res, message) => {
  return res.status(500).json({
    code: 500,
    message: message,
  });
};

const badRequestResponse = (res, message) => {
  return res.status(400).json({
    code: 400,
    message: message,
  });
};

const unauthorizedResponse = (res, message) => {
  return res.status(401).json({
    code: 401,
    message: message,
  });
};

const forbiddenResponse = (res, message) => {
  return res.status(403).json({
    code: 403,
    message: message,
  });
};

const notFoundResponse = (res, message) => {
  return res.status(404).json({
    code: 404,
    message: message,
  });
};

const handle304 = (message, res) => {
  if (message.includes("304")) {
    var logObj = {
      type: "INFO",
      code: 304,
      error: null,
      message: message,
    };
    return res.status(304).send(`Request failed with status code: 304`);
  }
};

module.exports = {
  successResponse,
  serverErrorResponse,
  badRequestResponse,
  unauthorizedResponse,
  forbiddenResponse,
  notFoundResponse,
  handle304,
};
