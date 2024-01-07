const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const UserSchema = new Schema(
  {
    email:{
      type:String,
      required: true
    },
    password:{
      type:String,
      required:true
    },
    fullname:{
      type:String,
      required:true
    },
    phoneNo:{
      type:String,
      required:true
    },
    isBanned:{
        type : Boolean,
        required:true
    },
    age : {
        type : Number,
        required:true
    },
    region :{
        type : String,
        required:true
    }
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('Users', UserSchema , 'Users')