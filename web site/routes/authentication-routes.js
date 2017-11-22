module.exports = function(router) {
    router.get('/register', (req, res) => res.render('./user/register.pug'))
          .get('/login', (req, res) => res.render('./user/login.pug'));
};