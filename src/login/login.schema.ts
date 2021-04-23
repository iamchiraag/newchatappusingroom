import * as mongoose from 'mongoose';
export const LoginSchema = new mongoose.Schema({
  id: { type: String, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
