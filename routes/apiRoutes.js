var db = require('../models');

module.exports = function(app) {
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
   
   app.get('/api/:user/:uuid', (req, res) => {
      var uuid = req.params.uuid;
      db.Todo.findAll({
         where: {
            UserUuid: uuid
         }
      }).then((userTodos) => {
         res.json(userTodos);
      });
   });

   app.post('/api/:user', (req, res) => {
      db.Todo.create({
         todo_desc: req.body.todo_desc,
         completed: 0,
         UserUuid: req.body.uuid            
      }).then((userTodo) => {
         res.json(userTodo);
      });
   });

   app.post('/api/:user', (req, res) => {
      var username = req.params.user
      db.User.create({
         name: username
      }).then((user) => {
         res.json(user);
      })
   })

   app.put('/:user', (req, res) => {
      db.Todo.update({
         completed: req.body.completed
      }, {
         where: {
            UserUuid: req.body.uuid
         }
      }).then((userTodos) => {
         res.json(userTodos);
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

