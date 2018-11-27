var express = require("express");

var PORT = process.PORT || 3306;

var path = require("path");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded( { extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ( { defaultLayout: "main"}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen((PORT, function() {
    console.log("server listening on port" + PORT);
}));