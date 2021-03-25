const Habit = require("../models/Habit");

module.exports = {
  findAll: function (req, res) {
    Habit
        .find(req.query)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Habit
        .findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    Habit
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Habit
        .findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  }
};