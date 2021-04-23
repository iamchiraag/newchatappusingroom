import * as mongoose from 'mongoose';
export const chatSchema = new mongoose.Schema({
    message : {type : String,required:false},
    userName:{type: String,required:false},
    room:{type:String,required:false},
    date:{type:Date,required:false}
    
})