// * Inside `burger.js`, import `orm.js` into `burger.js`


var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../../config/orms");

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var moBurger = sequelize.define("foodTime", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
});

moBurger.sync();

module.exports = moBurger;



// console.log(orm.read("burger_name", devoured));
// orm.create("burger_name", devoured);
// orm.update("burger_name", devoured);

// //     * Export at the end of the `burger.js` file.

// module.exports