const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getBrandValidator = [
  //@ 1- Rules
  check("id").isMongoId().withMessage("Invalid ID format."),
  //@ 2- Middleware --> Catch errors from Rules if exists
  validatorMiddleware,
];

exports.createBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Brand name is required.")
    .isLength({ min: 3 })
    .withMessage("Too short Brand name.")
    .isLength({ max: 32 })
    .withMessage("Too long Brand name."),
  validatorMiddleware,
];

exports.updateBrandValidator = [
  check("id").isMongoId().withMessage("Invalid ID format."),
  validatorMiddleware,
];

exports.deleteBrandValidator = [
  check("id").isMongoId().withMessage("Invalid ID format."),
  validatorMiddleware,
];
