var express = require('express');
var router = express.Router();
var todo = require('../models/todo');

router.get('/', (req, res) => {
    todo.selectAll((data) => {
        res.render('index', { todos: data });
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    todo.insertOne(req.body, (data) => {
        res.send(data);
    });
});

router.put('/update/:id', (req, res) => {
    todo.updateOne(req.body, (data) => {
        res.send(data);
    });
});

router.delete('/delete/:id', (req, res) => {
    todo.deleteOne(req.body, (data) => {
        res.send(data);
    })
})

router.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = router;
