const { TodoModel } = require("../models/TodoModel");

class TodoController {
  showAll(_, res) {
    TodoModel
      .find({})
      .then(obj => {
        console.log(obj)
        res.status(200).json(obj);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  create(req, res) {
    const { title } = req.body;

    const todo = new TodoModel({ title });

    todo
      .save()
      .then((obj) => {
        console.log(obj)
        res.status(200).json(obj);
      })
      .catch((err) => {
        res.json(404).json(err);
        console.log(err);
      });
  }

  update(req, res) {
    const { completed, id } = req.body;

    TodoModel
      .findByIdAndUpdate(id, { completed })
      .then(() => {
        TodoModel
          .findById(id)
          .then(obj => {
            res.status(200).json(obj);
          })
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}

module.exports = { TodoController };
