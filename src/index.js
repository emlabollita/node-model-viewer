const express = require("express");
const app = express();
const path = require("path");

//settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//settings

//routes
app.use(require("./routes/"));
//routes

//static files
app.use(express.static(path.join(__dirname, "public")));
//static files

//port
app.listen(app.get("port"), () => {
  console.log("Server run on Port: ", app.get("port"));
});
//port
