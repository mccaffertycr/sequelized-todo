// var express = require('express');
// var router = express.Router();
// var orm = require('../config/orm');
// var models = require('../models');

// router.get('/', (req, res) => {
//     models.User.findAll()
//     .then((users) => {
//         res.render('login', {
//             users: users
//         });
//     })
// });

// router.post('/new/:username', (req, res) => {
//     var username = req.params.username;
//     orm.newUser((req.body), (data) => {
//         res.json(data);
//         res.sendStatus(200);
//         res.redirect('/' + username);
//     })
// })

// router.get('/:username', (req, res) => {
//     orm.allTodos(req.body, (data) => {
//         res.render('index', { uuid: req.body.uuid, todos: data }); 
//     })
// })

// router.post('/:username', (req, res) => {
//     var username = req.params.username;
//     res.send(req.body);
// })

// router.post('/', (req, res) => {
//     models.Todo.createTodo(req.body, (data) => {
//         res.json(data);
//         res.sendStatus(200);
//     });
// });

// router.put('/update/:id', (req, res) => {
//     models.Todo.completeTodo(req.body, (data) => {
//         res.sendStatus(200);
//     });
// });

// router.delete('/delete/:id', (req, res) => {
//     models.Todo.deleteTodo(req.body, (data) => {
//         res.sendStatus(200);
//     })
// })

// router.get('*', (req, res) => {
//     res.redirect('/');
// });


// module.exports = router;

const models = require("../models");

module.exports = {
  userIndex: function (req, res) {
    console.log(req.body)
    models.User.findAll()
    .then((users) => {
        res.render('login', {
            users: users
        });
    })
  },
  userView: function (req, res) {
    models.Todo.findAll({
      where: {
         UserUuid: req.body.uuid
      }
    }).then(function (data) {
      res.render('index', { 
         uuid: req.body.uuid, 
         todos: data 
      });
    })
  }
};
