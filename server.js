const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://mingmanhk:<password>@cluster0.focfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);
mingmannk:hVyp3svkFXSNq0Aj;

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/homeRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
