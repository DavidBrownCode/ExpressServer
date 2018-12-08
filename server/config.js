var path = require ('path');
        rootPath = path.normalize(__dirname + '/..');
        env = process.env.NODE_ENV || 'development';

var config = {
    development: {
            root: rootPath,
            app: {name:'810'},
            port: 5000,
            db: 'mongodb://127.0.0.1/helpMe-dev'
    },
    test: {
            root:rootPath,
            app:{name: '810'},
            port: 4000,
            db: 'mongodb://127.0.0.1/helpMe-test'
    },

    production: {
            root: rootPath,
            app:{name: '810'},
            port:80,
            db: 'mongodb://127.0.0.1/helpMe'
    },
};    
    module.exports = config[env];


    /*  //////////////////////// Express.js Notes */ 

    /*The configuration will use either the development or
    production configuration based on the NODE_ENV
    environment variable*/

    var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
    var config = {
    development: {
    root: rootPath,
    app: { name: 'UCCSS' },
    port: 5000,
    },
    production: {
    root: rootPath,
    app: { name: 'UCCSS' },
    port: 80, }
    };
    module.exports = config[env];