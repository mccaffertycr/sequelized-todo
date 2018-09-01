const db = require('../models');

module.exports = function(app, passport) {
   app.get('/api/todos', (req, res) => {
      db.Todo.findAll({}).then((dbTodo) => {
         res.json(dbTodo);
      });
   });

   app.get('/api/users', (req, res) => {
      db.User.findAll({}).then((dbUser) => {
         res.json(dbUser);
      });
   });

   app.post('/api/:user/todos', (req, res) => {
      db.Todo.create({
         todo_desc: req.body.todo_desc,
         completed: 0,
         UserId: req.body.uid              
      }).then((userTodo) => {
         res.json(userTodo);
      });
   });

   app.post('/api/:user', passport.authenticate('local-signup', {
    successRedirect: '/api/:user',
    failureRedirect: '/'
    }
    ));

   app.put('/:user', (req, res) => {
      db.Todo.update({
         completed: req.body.completed
      }, {
         where: {
            id: req.body.id
         }
      }).then((todo) => {
         res.json(todo);
      }).catch((err) => {
         res.json(err);
      });
   });

   app.delete('/:user/:id', (req, res) => {
      db.Todo.destroy({
         where: {
            id: req.params.id
         }
      }).then((userTodos) => {
         res.json(userTodos);
      });
   });
}

