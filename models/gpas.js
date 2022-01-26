const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const gpaSchema = new Schema({
    python:{
        type:Number,
        min:0,
        max:100,
        default:0
    },
    java:{
        type:Number,
        min:0,
        max:100,
        default:0

    },
    c:{
        type:Number,
        min:0,
        max:100,
        default:0
    },
    student:{
        type:Schema.Types.ObjectId,
        ref:"Student"
    },
}, {
        timestamps: true
      });
module.exports = mongoose.model("GPA",gpaSchema)