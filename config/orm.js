var connection = require('./connection');

var orm = {
    selectAll: (callback) => {
      var query = 'select * from todos';
      connection.query(query, (err, res) => {
          if (err) throw err;
          callback(res);
      });
    },
    insertOne: (todo, callback) => {
      var query = 'insert into todos set ?';
      connection.query(query, todo, (err, res, fields) => {
          if (err) throw err;
          callback([todo, res.insertId]);
      });
    },
    updateOne: (todo, callback) => {
      var query = 'update todos set completed = ? where id = ?';
      connection.query(query, [todo.completed, todo.id], (err, res, fields) => {
          if (err) throw err;
          callback(todo);
      });
    },
    deleteOne: (todo, callback) => {
        var query = 'delete from todos where id = ?';
        connection.query(query, todo.id, (err, res, fields) => {
            if (err) throw err;
            callback(todo);
        })
    }
};


module.exports = orm;