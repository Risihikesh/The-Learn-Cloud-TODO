const express= require('express');
const signUP = require("../controller/SignUp.js");
const login = require("../controller/Login.js");
const {check} = require("express-validator");
const { addNote, changeCheck, dragNotes} = require("../controller/Todo.js");
const router = express.Router();


router.post(
  "/signup",
  check("email").isEmail().withMessage("Must be a valid email"),
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name must have minimum of 5 characters")
    .not()
    .matches(/\d/)
    .withMessage("Name must not contain any numbers"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be of at least 5 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
  signUP
);

router.post(
  "/login",
  check("email").isEmail().withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be of at least 5 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
  login
);

router.patch('/addnote/:id',addNote);
router.patch('/dragnotes/:id',dragNotes);
router.patch('/dragnotes/:id/:index',changeCheck);

module.exports= router;
