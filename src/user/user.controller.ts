import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/RegisterUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    console.log(registerUser);
    return 'success';
  }
}
