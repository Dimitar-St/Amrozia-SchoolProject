class AuthenticationController {
    constructor() {}

    loadRegisterPage(req, res) {
        res.render('./user/register.pug');
    } 

    loadLoginPage(req, res) {
        res.render('./user/login.pug');
    } 
}

module.exports = AuthenticationController;