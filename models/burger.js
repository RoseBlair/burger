// Import orm.js into burger.js
var orm = require("../config/orms.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {

    create: function(name, cb) {
        orm.create("foodTime", ["burger_name", "devoured"], [name, false], cb);
    },
    

    // Display burgers in the table "foodTime"
    selectAll: function(cb) {
        orm.selectAll("foodTime", function(res) {
            cb(res);
        });
    },

    // Insers a new burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("foodTime", cols, vals, function(res) {
            cb(res);
        });
    },

    // Changes the Boolean, "devoured," to 1.
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("foodTime", objColVals, condition, function(res) {
            cb(res);
        });
    },

    // Deletes burger
    deleteOne: function(condition, cb) {
        orm.deleteOne("foodTime", condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;
