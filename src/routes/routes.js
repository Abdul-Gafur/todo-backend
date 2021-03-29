const { Router } = require("express");
const { TodoController } = require("../controller/TodoController");

const router = Router();
const Todo = new TodoController();

router.get("/todos", Todo.showAll);
router.post("/todos", Todo.create);

module.exports = { router };