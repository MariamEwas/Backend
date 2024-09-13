const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://maryemhasan2004:Mar_582004@cluster0.icojq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to mvc1 database 1');
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = connectDB;
