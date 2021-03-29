const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { router } = require("./src/routes/routes.js");

const MONGO_URI = "mongodb+srv://admin:admin1234@claster0.a88iq.mongodb.net/Todo?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(8888, () => {
  console.log("Server runned http://localhost:8888");
});
