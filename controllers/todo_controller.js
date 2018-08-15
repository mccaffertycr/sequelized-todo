var express = require('express');
var router = express.Router();
var Todo = require('../config/orm');

router.get('/', (req, res) => {
    Todo.selectAll((data) => {
        res.render('index', { todos: data });
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Todo.createTodo(req.body.todo_desc, (data) => {
        res.send(data);
    });
});

router.put('/update/:id', (req, res) => {
    Todo.completeTodo(req.body, (data) => {
        res.send(data);
    });
});

// router.delete('/delete/:id', (req, res) => {
//     todo.deleteOne(req.body, (data) => {
//         res.send(data);
//     })
// })

router.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = router;
