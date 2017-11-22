module.exports = function(router) {
    router.get('/', (req, res) => {
        res.render('./home.pug');
    });
};