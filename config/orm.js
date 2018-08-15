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
          todo_desc: todo.todo_desc,
          completed: 0
      })
      .then((data) => {
          callback(data);
      });
    },
    completeTodo: (todo, callback) => {
      Todo.update(
        { completed: 1 },
        { where: {
            id: todo.id
          }
        }
      )
      .then((data) => {
          callback(data);
      });
    },
    deleteTodo: (todo, callback) => {
        Todo.destroy({
            where: {
                id: todo.id
            }
        })
        .then((data) => {
            callback(data);
        });
    }
};


module.exports = orm;