const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/diariesDB');
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;