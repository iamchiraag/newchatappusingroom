import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { registerIn } from './register.interface';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('registerapi') private readonly regobj: Model<registerIn>,
  ) {}

  async create(createRegisterDto: CreateRegisterDto) {
    const data = new this.regobj(createRegisterDto);
    return await data.save();
  }

  async viewdata() {
    return await this.regobj.find().exec();
  }

  async getSingleUser(userid: string) {
    const user = await this.regobj.findById(userid);
    return { user };
  }

  async findByName(name: string) {
    const user = await this.regobj.findOne({ username: name });
    console.log('user: ' + user);
    return user;
  }

  async updateData(userid: string, createRegisterDto: CreateRegisterDto) {
    const updated_data = await this.getSingleUser(userid);

    if (createRegisterDto.userid) {
      updated_data.user.userid = createRegisterDto.userid;
    }

    if (createRegisterDto.username) {
      updated_data.user.username = createRegisterDto.username;
    }

    if (createRegisterDto.password) {
      updated_data.user.password = createRegisterDto.password;
    }

    return updated_data.user.save();
  }
}
