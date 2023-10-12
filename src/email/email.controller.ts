// src/email/email.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'; // Correct import

@Controller('email')
export class EmailController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendEmail(
    @Body('email') email: string,
    @Body('message') message: string,
  ) {
    
    try {
      await this.mailerService.sendMail({
        to: 'shahnawazattar55@gmail.com', // The recipient's email address
        subject: 'Your Subject', // The email subject
        template: 'email', // The name of your Handlebars template (assuming you have one)
        from : "shahnawazattar55@gmail.com",
        context: {
            employerData:{

                name: 'shahnawaz', // Pass the message to the template
            }
        },
      });

      return { message: 'Email sent successfully' };
    } catch (error) {
      throw new Error(`Error sending email: ${error.message}`);
    }
  }
}
