const HomeController = require('../controllers/home-controller.js');

module.exports = function(router) {
    const controller = new HomeController();

    router.get('/', (req, res) => controller.loadHomePage(req, res));
};