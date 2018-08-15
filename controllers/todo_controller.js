var express = require('express');
var router = express.Router();
var Todo = require('../config/orm');

router.get('/', (req, res) => {
    Todo.selectAll((data) => {
        res.render('index', { todos: data });
    });
});

router.post('/', (req, res) => {
    Todo.createTodo(req.body, (data) => {
        res.sendStatus(200);
    });
});

router.put('/update/:id', (req, res) => {
    Todo.completeTodo(req.body, (data) => {
        res.sendStatus(200);
    });
});

router.delete('/delete/:id', (req, res) => {
    Todo.deleteTodo(req.body, (data) => {
        res.sendStatus(200);
    })
})

router.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = router;
