var controller = require('../controllers/todo_controller');

module.exports = function (app) {
  app.get("/", controller.userIndex)

  app.get("/api/:user/:uuid", controller.userView)
};