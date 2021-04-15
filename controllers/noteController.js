const Note = require("../models/Note");
const Habit = require("../models/Habit");

module.exports = {
  findAll: function (req, res) {
    Note
        .find(req.query)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Note
        .findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    Note
        .create(req.body)
        .then(dbModel => {
          Habit
              .findByIdAndUpdate( {_id: dbModel.listID },
              { "$push":  {"notes": dbModel} })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Note
        .findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  }
};