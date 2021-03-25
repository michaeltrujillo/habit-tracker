const express = require("express");
const router = express.Router();
const passport = require("passport");
const habitController = require("../../controllers/habitController");
const path = require("path");
const Habit = require("../../models/Habit");

router
    .route("/habits")
    .get(habitController.findAll);

router
    .route("/habits/:id")
    .get(habitController.findById)
    .delete(habitController.remove);

router.post(
    "/habits",
    passport.authenticate("jwt", { session: false }),
    function (req, res) {
        const habit = new Habit(req.body);
        habit.save((err) => {
            if (err) {
                res.json({ message: err.message, error: true });
            } else {
                req.user.habits.push(habit);
                req.user.save((err) => {
                    if (err) {
                        res.json({ message: err.message, error: true });
                    } else {
                        res.json({ message: "Successfully created habit", error: false });
                    }
                });
            }
        });
    }
);

module.exports = router;