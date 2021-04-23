import * as mongoose from 'mongoose';

export interface registerIn extends mongoose.Document {
  userid: string;
  username: string;
  date: Date;
  password: string;
}

