import { DynamicModule, Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Role } from '../user/entities/role.entity';
import { Permission } from '../user/entities/permission.entity';

let isInitialized = false;

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    if (isInitialized) {
      return {
        module: DatabaseModule,
        imports: [],
      };
    }

    isInitialized = true;

    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '12345678',
          database: 'meeting_room_booking_system',
          synchronize: true,
          logging: false,
          entities: [User, Role, Permission],
        }),
      ],
    };
  }
}
