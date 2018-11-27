var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    // Display all burgers in the db.
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Add a burger to the db.
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    // Set burger devoured status to true.
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    // Delete a burger from the db.
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;







// var orm = require("./connection.js");

// var seeBurger = {
//     read: function selectAll(cb) {
//       orm.all("foodTime", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function insertOne(cols, vals, cb) {
//       orm.create("foodTime", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function updateOne(objColVals, condition, cb) {
//       orm.update("foodTime", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
            // delete: function(condition, cb) {
            //   orm.delete("foodTime", condition, function(res) {
            //     cb(res);
            //   });
            // }
// };
  
  
// module.exports = seeBurger;
  







// function selectAll() {
//     inquirer
//         .prompt({
//             name: "action",
//             type: "list",
//             message: "What would you like to do?",
//             choices: [
//                 "select all",
//                 "insert one",
//                 "update one"
//             ]
//         })
//     .then(function(answer) {
//         switch(answer.action) {
//             case "select all":
//             selectAll();
//             break;
        
//             case "insert one":
//             insertOne();
//             break;

//             case "update one":
//             updateOne();
//             break;
//         }
//     });
// }

// function selectAll() {
//     var query = "SELECT id, burger_name, devoured FROM foodtime";
//     connection.query(query, {burger_name: burger_name.answer}, function(err, res) {
//         for (var i = 0; i<res.length; i++) {
//             console.log ("burger " + res[i].burger_name + "eaten? " + devoured)
//         }
//         runSearch();
//     })
// }

// function insertOne()
//     inquirer
//         .prompt({
//   name: "artist",
//   type: "input",
//   message: "What artist would you like to search for?"
// })
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.