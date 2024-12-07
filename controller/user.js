const User = require('../model/user');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth');
const bcrypt = require('bcrypt');

async function postUser(req, res) {
    // console.log('this is req.body', req.body);
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
        name,
        email,
        password:hashPassword,
    });
    return res.redirect('/diary');
}

async function postUserLogin(req, res) {
    // console.log('this is req.body', req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
        return res.render("login", {
            error: "Invalid Email"
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return res.render("login", {
            error: "Invalid Password"
        });
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    return res.redirect('/diary');
}

module.exports = {
    postUser,
    postUserLogin
}