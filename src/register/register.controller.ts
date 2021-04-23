import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';


@Controller('register')
export class RegisterController {

    constructor(private readonly regservice:RegisterService){}

    

  @Get('/view')
  async view(){
    const data = await this.regservice.viewdata();
    return data;
  }

  @Get('/getsingle/:userid')
  async SingleData(@Param() userid : string){
      const single_data = await this.regservice.getSingleUser(userid);
      return {single_data};

  } 
  @Patch('update/:userid')
  async updateUser(@Param('userid') userid : string,@Body() createRegisterDto:CreateRegisterDto){
    const update_data = this.regservice.updateData(userid,createRegisterDto);
    return await update_data;
  }

  @Get('find/:name')
  async findUser(@Param('name') name:string){
    console.log("name in controller: "+await name);
    const user = await this.regservice.findByName(name);
    return user;
  }
}
