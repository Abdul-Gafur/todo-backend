const { TodoModel } = require("../models/TodoModel");

class TodoController {
  showAll(_, res) {
    TodoModel
      .find({})
      .then(obj => {
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
        res.status(200).json(obj);
      })
      .catch((err) => {
        res.json(404).json(err);
        console.log(err);
      });
  }
}

module.exports = { TodoController };
