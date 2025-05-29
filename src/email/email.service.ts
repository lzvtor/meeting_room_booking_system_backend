import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation(email: string, username: string, link: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: '欢迎注册 ✔',
      template: './', // 使用模板，模板文件放在src/mailer/templates/confirmation.hbs
      context: {
        name: username,
        url: link,
      },
    });
  }
}
