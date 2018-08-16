var express = require('express');
var router = express.Router();
var orm = require('../config/orm');
var models = require('../models');

router.get('/', (req, res) => {
    models.User.findAll({
        include: [ models.Todo ]
    }).then((users) => {
        res.render('login', {
            users: users
        });
    })
});

router.get('/:username', (req, res) => {
    orm.allTodos((req.body), (data) => {
        res.render('index', { todos: data });
    })
})

router.post('/:username', (req, res) => {
    var username = req.params.username;
    orm.newUser((req.body), (data) => {
        res.json(data);
        res.sendStatus(200);
        res.redirect('/' + username);
    })
})

router.post('/', (req, res) => {
    models.Todo.createTodo(req.body, (data) => {
        res.json(data);
        res.sendStatus(200);
    });
});

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

router.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = router;
