var orm = require('../config/orm');

var todo = {
    selectAll: (callback) => {
      orm.selectAll((res) => {
          callback(res);
      });
    },
    insertOne: (todo, callback) => {
        orm.insertOne(todo, (res) => {
            callback(res);
        });
    },
    updateOne: (todo, callback) => {
        orm.updateOne(todo, (res) => {
            callback(res);
        });
    },
    deleteOne: (todo, callback) => {
        orm.deleteOne(todo, (res) => {
            callback(res);
        });
    }
};


module.exports = todo;