import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/RegisterUserDto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private logger = new Logger();

  @InjectRepository(User)
  private userRepository: Repository<User>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async register(user: RegisterUserDto) {}
}
