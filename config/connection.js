//require mysql

var mysql = require("mysql");

//connect to specific database

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    // connection = mysql.createConnection({
    //     port: 3306,
    //     host: 'localhost',
    //     user: 'root',
    //     password: password,
    //     database: 'burgers_db'
    // })
};




// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root", 
//     password: "Rosebud1984",
//     database: "burgers_db"
// });

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected");
});

module.exports = connection;

