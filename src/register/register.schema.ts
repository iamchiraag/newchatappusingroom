import * as mongoose from 'mongoose';


export const RegisterSchema = new mongoose.Schema({
  userid: {
       type: String,
       required: false 
    },
  username: {
       type: String,
       required: true 
    },
  date: {
       type: Date 
    },
  password: {
       type: String,
       required: true },
});
