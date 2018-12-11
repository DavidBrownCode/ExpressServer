var requireAuth = passport.authenticate('jwt', { session: false });
//Get todos
//added in from authentication lessons
router.get('/users/:id', requireAuth, asyncHandler(async (req, res) => {
    logger.log('info', 'Get all ToDos');
    let query = ToDos.find();
query.sort(req.query.order)
    await query.exec().then(result => {
        res.status(200).json(result);
    })
}));

//add todos
//added in from authentication lessons
router.get('/users/:id', requireAuth, asyncHandler(async (req, res) => {
    logger.log('info', 'Get all ToDos');
    let query = ToDos.find();
    query.sort(req.query.order)
    if(req.query.status){
        if(req.query.status[0] == '-'){
            query.where('status').ne(req.query.status.substring(1));
        } else {
            query.where('status').eq(req.query.status);
        }
    }
    await query.exec().then(result => {
        res.status(200).json(result);
    })
}));

//Populate todos
//added in from authentication lessons
router.get('/users/:id', requireAuth, asyncHandler(async (req, res) => {
    logger.log('info', 'Get all ToDos');
    let query = ToDos.find();
    query.sort(req.query.order)
    /*
    .populate({path: 'personId', model: 'User', select: 'lastName firstName fullName'} )
    .populate({path: 'ownerId', model: 'User', select: 'lastName firstName fullName'} );
*/
    .populate({path: 'todo'} )
    .populate({path: 'priority'})
    .populate({path: 'done'});
}));

//add schema .json files (Help Ticket API)

/*added in from authentication lessons
router.get('/users/:id', requireAuth, asyncHandler(async (req, res) => {
    logger.log('info', 'Get all ToDos');*/

/*Added from File Uploads class notes

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    var path = config.uploads + '/ToDoss';
    mkdirp(path, function(err) {
            if(err){
                res.status(500).json(err);
            } else {    
                cb(null, path);
            }
        });
        },
        filename: function (req, file, cb) {
            file.fileName = file.originalname ;
            cb(null, file.fieldname + '-' + Date.now());
        }
});
*/     
