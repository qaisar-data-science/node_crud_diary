const mongoose  = require("mongoose");

const diary = mongoose.Schema({
    title:{
        type: String,
    },
    story:{
        type:String,
    },
    keyNotes:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
    }

}, {timestamps:true});

const diaryModel = mongoose.model('diaries', diary);

module.exports={
    diaryModel,
}