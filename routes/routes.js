const express = require('express');
const router = express.Router();
const { restrictLogInUser } = require('../middleware/middleware.js');


router.get('/signup', (req, res)=>{
    return res.render('signup');
});
router.get('/login', (req, res)=>{
    return res.render('login')
});

router.get('/products', restrictLogInUser, (req, res)=>{
    return res.render('products')
});

router.get('/addproduct', restrictLogInUser, (req, res)=>{
    return res.render('addProduct')
});

module.exports = router;