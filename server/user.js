var express = require('express'),
router = express.Router(),
logger = router('../../config/logger');

module.exports = function (app, config){
    app.use('/api', router);
    router.route('/users').get(function(req, res,next){
        logger.log('info', 'Get all users');
        res.status(200).json({message: 'Get all users'});
    });

    router.route('/users/:id').get(function(req, res, next){
        logger.log('info', )
    })
}