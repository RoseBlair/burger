var mysql = require("mysql");

var connection = mysql.createConnection();

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + thread.id);
});

module.exports = config;

