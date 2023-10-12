// src/mailer/mailer.service.ts

import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Injectable()
export class MailerService {
  constructor(private readonly nestMailerService: NestMailerService) {}

  async sendEmail(email: string, subject: string, template: string, context: Record<string, any>) {
    await this.nestMailerService.sendMail({
      to: email,
      subject,
      template: template + '.hbs', // Assuming your email templates are in a 'templates' folder
      context,
    });
  }
}
