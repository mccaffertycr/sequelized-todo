var models = require('../models');

var orm = {
    newUser: (user, callback) => {
      models.User.create({
          name: user.name
      })
    },
    allTodos: (user, callback) => {
      models.Todo.findAll({
          where: {
            UserUuid: user.uuid
          }
      })
      .then((data) => {
          callback(data);
      });
    },
    createTodo: (user, callback) => {
      models.User.findAll({
          where: {
              name: user.name
          }
      })
      .then((user) => {
          models.Todo.create({
              todo_desc: user.todo_desc,
              completed: 0,
              userUuid: user.uuid
          })
          .then((data) => {
              callback(data);
          })
      })
    //   Todo.create({
    //       todo_desc: todo.todo_desc,
    //       completed: 0
    //    })
    //   .then((data) => {
    //       callback(data);
    //   });
    },
    completeTodo: (todo, callback) => {
      models.Todo.update(
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
        models.Todo.destroy({
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