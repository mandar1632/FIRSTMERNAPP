const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb+srv://mandar1632:87V6eCQ9t8cEUzB9@firstmernapp.ceqtuaj.mongodb.net/?retryWrites=true&w=majority&appName=FIRSTMERNAPP")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

module.exports = db;
