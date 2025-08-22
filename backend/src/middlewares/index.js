// src/middlewares/index.js
const auth = require("./auth.middleware");
const error = require("./error.middleware");
const logger = require("./logger.middleware");
const pro = require("./pro.middleware");
const rateLimit = require("./rateLimit.middleware");
const validate = require("./validate.middleware");

module.exports = {
  auth,
  error,
  logger,
  pro,
  rateLimit,
  validate,
};
