var Sequelize = require('sequelize');
var sequelize;

// heroku / localhost conditional
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('todo_db2', 'root', 'root', {
        host: 'localhost',
        port: 3306,
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
    });      
};


module.exports = sequelize;