const fs = require('fs');

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "todo_db2",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   host: process.env.DB_HOSTNAME,
    dialect: "mysql"
  },
  "production": {
   "use_env_variable": "JAWSDB_URL",
   "dialect": "mysql"
 }
};

