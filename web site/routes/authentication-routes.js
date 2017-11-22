const AuthenticationController = require('../controllers/authentication-controller.js');

module.exports = function(router) {
    const controller = new AuthenticationController();

    router.get('/register', (req, res) => controller.loadRegisterPage(req, res))
          .get('/login', (req, res) => controller.loadLoginPage(req, res));
};