const {diaryModel } = require('../model/model.js');


async function getDiary(req, res) {
  if(!req.user) return res.redirect('/login');
    const diaryData = await diaryModel.find({createdBy: req.user._id});
    return res.status(200).json({status:true, data: diaryData, msg:'Diary fetched successfully'});
}

async function getDataDiary (req, res) {
    try {
      if(!req.user) return res.redirect('/login');
      const diaryData = await diaryModel.find({createdBy: req.user._id}); 
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
        keyNotes,
        createdBy: req.user._id,
    });
    return res.redirect('/diary');
}



module.exports={
    getDiary,
    postDiary,
    getDataDiary,
    
}