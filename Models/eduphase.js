const mongoose =require('mongoose');

const EduphaseModel = mongoose.Schema({
   id:Number,
   name:String,
   desc:String,
   courses:[{coursename:String,shortdesc:String}]
});

const Eduphase = mongoose.model('educationphase',EduphaseModel);
Eduphase.syncIndexes();

module.exports = Eduphase;