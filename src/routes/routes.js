const { Router } = require("express");
const { TodoController } = require("../controller/TodoController");

const router = Router();
const Todo = new TodoController();

router.post("/todos/create", Todo.create);

module.exports = { router };