import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { loginInter } from './login.interface';
import { Model } from 'mongoose';



@Injectable()
export class LoginService {

    constructor(@InjectModel('Login') private readonly loginobj: Model<loginInter>) { }

    async insertData(appdto: CreateLoginDto) {
      const data = new this.loginobj(appdto);
      return await data.save();
    }
  
    async viewdata() {
      return await this.loginobj.find().exec()
    }
  
    async getSingleUser(id: string) {
      const user = await this.loginobj.findById(id);
      return user;
  
    }

    async findByName(name:string){

       const user = await this.loginobj.findOne({"username": name});
       console.log("user: "+ user)
       return user;

    }
  
    async updateData(id: string, CreateLoginDto: CreateLoginDto) {
      const updated_data = await this.getSingleUser(id);
      if(CreateLoginDto.id){
        updated_data.id = CreateLoginDto.id;
      }
  
      if (CreateLoginDto.username) {
        updated_data.username = CreateLoginDto.username;
      }
      
      if (CreateLoginDto.password) {
        updated_data.password = CreateLoginDto.password;
      }
  
      return updated_data.save();
  
    }
}
