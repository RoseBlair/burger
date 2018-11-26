

var express = require("express");
burgers = require("../../db/models/burger");

var app = express();

var PORT = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//I DON'T THINK THE BELOW CODE IS CORRECT

require("../../views/index.handlebars")(app);
require("../../layouts/main.handlebars")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });