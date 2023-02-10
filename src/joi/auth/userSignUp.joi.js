const joi = require("@hapi/joi");

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(7).required(),
});
