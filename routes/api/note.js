const express = require("express");
const router = express.Router();
const passport = require("passport");
const noteController = require("../../controllers/noteController");

router
    .route("/notes")
    .get(noteController.findAll)
    .post(noteController.create);

router
    .route("/notes/:id")
    .get(noteController.findById)
    .delete(noteController.remove);

module.exports = router;