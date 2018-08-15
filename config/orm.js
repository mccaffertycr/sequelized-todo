var Todo = require('../models/todo');

var orm = {
    selectAll: (callback) => {
      Todo.findAll()
      .then((data) => {
          callback(data);
      });
    },
    createTodo: (todo, callback) => {
      Todo.create({
          todo_desc: todo
      })
      .then((data) => {
          callback(data);
      });
    },
    completeTodo: (todo, callback) => {
      Todo.completed = 1
      Todo.save({ 
              fields: completed, 
              where: { 
                  id: todo.id 
              }
      })
      .then((data) => {
          callback(data);
      });
    }
    // deleteOne: (todo, callback) => {
    //     var query = 'delete from todos where id = ?';
    //     connection.query(query, todo.id, (err, res, fields) => {
    //         if (err) throw err;
    //         callback(todo);
    //     })
    // }
};


module.exports = orm;