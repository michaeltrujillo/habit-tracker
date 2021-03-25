const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("../../passport");
const JWT = require("jsonwebtoken");
const userController = require("../../controllers/userController");
const path = require("path");
const User = require("../../models/User");

module.exports = router;

function signToken(userID) {
  const payload = {
    iss: "MaxxS",
    sub: userID,
  };
  const secretOrKey =
    "4553856192504568325788651554432717215878653868682666525851939518"; // matches secretOrKey in passport.js. (generated with https://maxx105.github.io/password_generator/)
  return JWT.sign(payload, secretOrKey);
}

router
  .route("/register")
  .get(userController.findAll)
  .post(userController.findOneThenSave);

router.route("/user/:id")
  .get(userController.findById)
  .post(userController.create);

router.post(
    "/login",
    passport.authenticate("local", { session: false }),
    (req, res) => {
      if (req.isAuthenticated()) {
        const { _id, username } = req.user;
        const token = signToken(_id);
        res.cookie("access_token", token, { httpOnly: true, sameSite: true });
        res.json({ isAuthenticated: true, user: { username }, id: { _id } });
      }
    }
);

router.get(
    "/logout",
    passport.authenticate("jwt", { session: false }),
    function (req, res) {
      res.clearCookie("access_token");
      res.json({ user: { username: "" }, success: true });
    }
);

router.get(
    "/authenticated",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { _id } = req.user;
      const { username } = req.user;
      res.json({
        isAuthenticated: true,
        user: { username },
        id: { _id }
      });
    }
);

router.get(
  "/userHabits",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    User.findById({ _id: req.user._id })
      .populate("habits")
      .exec((err, document) => {
        if (err) {
          res.json({ message: "Error has occurred", error: true });
        } else {
          res.json({ habits: document.habits, authenticated: true });
        }
      });
  }
);

router.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});