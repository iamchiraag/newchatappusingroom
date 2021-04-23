import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import * as mongoose from 'mongoose';
import { RegisterSchema } from './register.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: "registerapi", schema: RegisterSchema }])],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
