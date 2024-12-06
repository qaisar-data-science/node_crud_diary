const express = require('express');
const router = express.Router();
const { postUser, postUserLogin} = require('../controller/user');


router.post('/', postUser);
router.post('/login', postUserLogin)


module.exports = router;