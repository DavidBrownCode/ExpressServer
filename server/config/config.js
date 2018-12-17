var path = require ('path');
        rootPath = path.normalize(__dirname + '/..');
        env = process.env.NODE_ENV || 'development';

var config = {
    development: {
            root: rootPath,
            app: {name:'ExpressServer'},
            port: 5000,
            db: 'mongodb://127.0.0.1/helpMe-dev',
            secret: "davidusedtolovetocode"
    },
    test: {
            root:rootPath,
            app:{name: 'ExpressServer'},
            port: 4000,
            db: 'mongodb://127.0.0.1/helpMe-test',
            secret: "davidusedtolovetocode"
    },

    production: {
            root: rootPath,
            app:{name: 'ExpressServer'},
            port:80,
            db: 'mongodb://127.0.0.1/helpMe',
            secret: "davidusedtolovetocode"
    },
};    
    module.exports = config[env];

