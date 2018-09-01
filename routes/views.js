const controller = require('../controllers/todo_controller');
const authController = require('../controllers/auth_controller');

module.exports = function (app, passport) {
  app.get("/", authController.signup)

  app.get("/:user/:id", controller.userView)
};