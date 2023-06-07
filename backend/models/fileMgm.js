const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    finedStudent:{
        rollNumber: Number,
        required: true,
    },
    books:{
        type: String,
        required: true,        
    },
    bookQuantity:{
        type: Number,
        required: true,
    },
    bookIssueTime:{
        type: String,
        required: true,
    },
    bookReturnTime:{
        type: String,
        required: true,
    },
    issuedBy:{
        type: String,
        required: false,
    }
})

const filemanagement = mongoose.model("fileMgm",MgmSchema);
module.exports = fileMgm;

