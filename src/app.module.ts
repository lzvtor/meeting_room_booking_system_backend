import { Module } from '@nestjs/common';

import { GlobalConfigModule } from './config/global-config.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [GlobalConfigModule, UserModule, EmailModule, ChatModule],
})
export class AppModule {}
