const express = require('express');
const router = express.Router();
const { getDiary, postDiary, getDataDiary } = require('../controller/controller.js');
const { productPost, getProduct } = require('../controller/products.js')
const {restrictLogInUser, checkAuth} = require('../middleware/middleware.js');



router.post('/diary',restrictLogInUser, checkAuth, postDiary);

router.get('/diary', restrictLogInUser, checkAuth, getDataDiary); 

router.get('/', restrictLogInUser,checkAuth, getDiary);

router.post('/addproduct',restrictLogInUser, productPost);

router.get('/products',restrictLogInUser, getProduct);

module.exports = router; 