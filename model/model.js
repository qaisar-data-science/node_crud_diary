const mongoose  = require("mongoose");

const diary = mongoose.Schema({
    title:{
        type: String,
    },
    story:{
        type:String,
    },
    keyNotes:{
        type:String
    }

}, {timestamps:true});

const diaryModel = mongoose.model('diaries', diary);

module.exports={
    diaryModel,
}