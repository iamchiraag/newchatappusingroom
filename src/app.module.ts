import { Module } from '@nestjs/common';
// import { AppGateway } from './app.gateway';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
@Module({
  imports: [RegisterModule, 
    MongooseModule.forRoot('mongodb+srv://user:chirag123@cluster0.jefqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), LoginModule,],
  controllers: [AlertController],
  providers: [ChatGateway, AlertGateway],
})
export class AppModule {}
