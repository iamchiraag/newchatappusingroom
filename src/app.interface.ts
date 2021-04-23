import * as mongoose from 'mongoose';

export interface chatApi extends mongoose.Document{
    message : string;
    userName: string;
    room: string;
    date: Date;
    
}