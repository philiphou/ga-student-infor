const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const sutdentSchema = new Schema({

    firstname: String,
    lastname:String,
    sid:Number,

   
   
},
{
    timestamps: true
  });

module.exports = mongoose.model("Student",sutdentSchema)