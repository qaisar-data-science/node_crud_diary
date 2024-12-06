const express = require('express')
const router = express.Router();
const {diaryModel } = require('../model/model.js');


async function getDiary(req, res) {
    const diaryData = await diaryModel.find({});
    return res.status(200).json({status:true, data: diaryData, msg:'Diary fetched successfully'});
}

async function getDataDiary (req, res) {
    try {
      const diaryData = await diaryModel.find({}); 
      return res.render('diary', { diary: diaryData });
    } catch (err) {
      console.error('Error fetching diary data:', err);
      return res.status(500).send('Internal Server Error');
    }
  };

async function postDiary(req, res) {
    const { title, story, keyNotes } = req.body;
    await diaryModel.create({
        title,
        story,
        keyNotes
    });
    return res.redirect('/diary');
}



module.exports={
    getDiary,
    postDiary,
    getDataDiary,
    
}