const express = require("express");
const router = express.Router();
const passport = require("passport");
const usersConrtoller = require("../controllers/users_controller");

router.get("/profile", passport.checkAuthentication, usersConrtoller.profile);

router.get("/sign-up", usersConrtoller.signUp);

router.get("/sign-in", usersConrtoller.signin);

router.post("/create", usersConrtoller.create);

// router.post("/create-session", usersConrtoller.createSession);

// use passport as a middlware to authorize
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  usersConrtoller.createSession
);

router.get("/sign-out", usersConrtoller.destroSession);

module.exports = router;
