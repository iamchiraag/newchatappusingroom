import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RegisterService } from 'src/register/register.service';
import { loginDTO } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService,private readonly regservice:RegisterService) {}

    @Post('insert')
    async Insert(@Body() appdto : loginDTO){

      const value =await  this.regservice.viewdata();

      

      value.forEach(async (user)=>{
        var val = JSON.stringify(user);
        var data = JSON.parse(val);
     
        if(data.username===appdto.username){
          console.log("user in log: "+value)
          const insertion =await this.loginService.insertData(appdto);
          return insertion;
        }
      })
      
    }
  
    @Get('view')
    async view(){
      const data = await this.loginService.viewdata();
      return data;
    }
  
    @Get('search')
    async getLoginUser(@Body() id:string){
     
      const data = await this.loginService.getSingleUser(id);
      return data;
    }
  
    @Patch('update/:id')
    async updateUser(@Param('id') id : string,@Body() logindto:loginDTO){
      const update_data = this.loginService.updateData(id,logindto);
      return await update_data;
    }

    @Get('find/:name')
    async findUser(@Param('name') name:string){
      console.log("name in controller: "+await name);
      const user = await this.loginService.findByName(name);
      return user;
    }
}
