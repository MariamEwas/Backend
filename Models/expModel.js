const mongoose =require('mongoose');

const ExpSchema = mongoose.Schema({
    id:Number,
    name:String,
    year:String,
    rule:String,
    desc:String,
    imageUrl:String
});

const Exp=mongoose.model('Experience',ExpSchema);
Exp.syncIndexes();

module.exports = Exp;