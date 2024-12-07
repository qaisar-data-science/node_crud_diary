const express = require('express');
const connectDB = require('./connection/connection');
const path = require('path');
const cookieParser = require('cookie-parser');



const Routes = require('./routes/routes');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/staticRoute')

const app = express();
const PORT = 7000;

connectDB();
app.set('view engine', 'ejs');  
app.set('views', path.resolve('./views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', staticRoute);
app.use('/', Routes)
app.use('/user', userRoute)


app.listen(PORT, ()=>{
    console.log(`The app is listened at ${PORT}`);
});
