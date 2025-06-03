import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { RedisModule } from '../redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    RedisModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
