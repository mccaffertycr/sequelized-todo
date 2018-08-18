const models = require("../models");

module.exports = {
  userIndex: function (req, res) {
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
         UserUuid: req.params.uuid
      }
    }).then(function (data) {
      res.render('index', { 
         username: req.params.user,
         uuid: req.params.uuid, 
         todos: data 
      });
    })
  }
};
