const slugify = require("slugify");
const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getCategoryValidator = [
  //@ 1- Rules
  check("id").isMongoId().withMessage("Invalid ID format."),
  //@ 2- Middleware --> Catch errors from Rules if exists
  validatorMiddleware,
];

exports.createCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("Category name is required.")
    .isLength({ min: 3 })
    .withMessage("Too short category name.")
    .isLength({ max: 32 })
    .withMessage("Too long category name.")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];

exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid ID format."),
  check("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];

exports.deleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid ID format."),
  validatorMiddleware,
];
