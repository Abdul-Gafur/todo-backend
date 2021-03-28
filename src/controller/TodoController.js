const { TodoModel } = require("../models/TodoModel");

class TodoController {
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
