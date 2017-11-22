class HomeController {
    constructor() {}

    loadHomePage(req, res) {
        res.render('./home.pug');
    }
}

module.exports = HomeController;