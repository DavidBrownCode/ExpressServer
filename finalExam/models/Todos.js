var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var ToDoSchema = new Schema({
    todo:{ type:String},
    priority: {type: String, enum: ['High', 'Medium', 'Low']},
    done: { type: Boolean, default: false}
});

/*
//Many side Document
{
    Title
    PersonID
    OwnerID
    Status
    Content {
    PersonID
    Content
    File {
    FileName
    OrignalFileName
    }
    DateCreated
    }
    DateCreated
}

//Array of many side document
{
    Title
    PersonID
    OwnerID
    Status
    Content [ ]
    DateCreated
    }

    {
    PersonID
    Content
    File {
    FileName
    OriginalFileName
    }
    DateCreated
    }

    //One side ID in Many Side document
    {
        Title
        PersonID
        OwnerID
        Status
        DateCreated
        }
    
        {
            PersonID
            Content
            HelpTicketID
            File {
                FileName
                OriginalFileName
                }
            DateCreated
        }
*/