module.exports = function() {
    const express = require("express"),
          app = express(),
          expressSession = require('express-session'),
          bodyParser = require('body-parser'),
          { Router } = require('express'),
          path = require('path'),
          libsPath = path.join(__dirname, '../node_modules'),
          publicPath = path.join(__dirname, '../public'),
          port = 8080;
    
    app.set('view engine', 'pug');
    app.set('views', './views/');
    
    app.use('/libs', express.static(libsPath));
    app.use('/public', express.static(publicPath));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressSession({
        secret: 'shop-delight',
        cookie: { maxAge: 60 * 60 * 60 * 1000 },
        rolling: true,
        resave: true,
        saveUninitialized: false,
    }));

    const router = new Router();

    require('../routes/home-routes.js')(router);
    require('../routes/authentication-routes.js')(router);

    app.use(router);

    return app;
};