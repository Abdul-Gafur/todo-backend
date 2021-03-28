const { model, Schema } = require("mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    default: "Title",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = model("Toso", TodoSchema);

module.exports = { TodoModel };
