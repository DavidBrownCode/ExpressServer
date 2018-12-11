//Get todos
router.get('/helpTickets', asyncHandler(async (req, res) => {
    logger.log('info','Get all HelpTickets');
    let query = HelpTicket.find();
query.sort(req.query.order)
    await query.exec().then(result => {
        res.status(200).json(result);
    })
}));

//add todos
router.get('/helpTickets', asyncHandler(async (req, res) => {
    logger.log('info','Get all HelpTickets');
    let query = HelpTicket.find();
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
router.get('/helpTickets', asyncHandler(async (req, res) => {
    logger.log('info','Get all HelpTickets');
    let query = HelpTicket.find();
query.sort(req.query.order)
.populate({path: 'personId', model: 'User', select: 'lastName firstName fullName'} )
.populate({path: 'ownerId', model: 'User', select: 'lastName firstName fullName'} );
}));

//add schema .json files