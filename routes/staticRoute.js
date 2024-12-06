const express = require('express');
const router = express.Router();
const { getDiary, postDiary, getDataDiary } = require('../controller/controller.js');
const {restrictLogInUser, checkAuth} = require('../middleware/middleware.js');
const {diaryModel } = require('../model/model.js');



router.post('/diary',restrictLogInUser, checkAuth, postDiary);

router.get('/diary', restrictLogInUser,checkAuth, getDataDiary); 

router.get('/', restrictLogInUser,checkAuth, getDiary);



module.exports = router; 