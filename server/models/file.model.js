import mongoose from "mongoose";

const fileschema=new mongoose.Schema({
    path:{
      type:String,
      required:true
    },
    name:{
        type:String,
        required:true

    },
    downloadContent:{
        type:String,
        required:true,
        default:0
    }
})

const File=mongoose.model('file',fileschema);
export default File;