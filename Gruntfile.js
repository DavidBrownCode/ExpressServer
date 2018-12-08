module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env : {
                dev : {
                    NODE_ENV : 'development'
                },
                production: {
                    NODE_ENV : 'production'
                },
//added to original copied text
                nodemon: {
                    dev: {script: 'index.js'}
                },
//added to original copied text
                jshint: {
                    options: {
                        reporter: require('jshint-stylish'),
                        esversion: 6
                        },
                        all: ['Gruntfile.js', 'config/*.js']
                        },
        }
    });    
};

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-nodemon');
grunt.loadNpmTasks('grunt-env');

grunt.loadNpmTasks('grunt-env');

grunt.registerTask('default', [
'env:dev',
//added to original copied text
'nodemon',
'jshint',
]);

grunt.registerTask('production', [
'env:production',
//added to original copied text
'nodemon'
]);