const express = require('express');
const router = express.Router();
const { getDiary, postDiary, getDataDiary } = require('../controller/controller.js');
const {restrictLogInUser} = require('../middleware/middleware.js');
const {diaryModel } = require('../model/model.js');



router.post('/diary',restrictLogInUser, postDiary);

router.get('/diary', restrictLogInUser, getDataDiary); 

router.get('/', restrictLogInUser, getDiary);



module.exports = router; 