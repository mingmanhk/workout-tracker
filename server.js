require("dotenv").config({ path: "./config.env" });

const express = require("express");
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

connectDB();

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/homeRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
