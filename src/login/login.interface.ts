import * as mongoose from 'mongoose';

export interface loginInter extends mongoose.Document{
    id : string;
    username : string;
    password : string;
}