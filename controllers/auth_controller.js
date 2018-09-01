const models = require("../models");
var exports = module.exports = {}
 
exports.signup = (req, res) => { 
  models.User.findAll()
  .then((users) => {
    res.render('login', {
      users: users
    });
  }) 
}