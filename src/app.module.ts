// src/app.module.ts

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AppController } from './app.controller'; // Import your controller
import { AppService } from './app.service';
import { MailerService } from './mailer/mailer.service';
import { EmailController } from './email/email.controller';
import { UploadModule } from './upload/upload.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/xlsx-uploader'),
    ScheduleModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => {
        const awsConfig = cfg.get('awsConfig');
        return {
          transport: {
            host: 'email-smtp.us-east-1.amazonaws.com',
            port: 587,
            secure: false,
            auth: {
              user: 'AKIAUVLHAT7H5KBNBUB5',
              pass: 'BAmx1QaYkIuDeZTC5G/VY56sfwNqSLpF6SSujauy1oPd',
            },
          },
          template: {
            dir: process.cwd() + '/templates/',
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
          options: {
            partials: {
              dir: process.cwd() + '/templates/partials',
              options: {
                strict: true,
              },
            },
          },
        };
      },
      inject: [ConfigService],
    }),
    SqsModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => {
        const awsConfig = cfg.get('awsConfig');
        return {
          producers: [
            {
              name: 'my-practice',
              queueUrl: 'https://sqs.us-east-1.amazonaws.com/320727982031/my-practice',
              region: 'us-east-1',
            },
          ],
          // consumers: [
          //   {
          //     name: 'my-practice',
          //     queueUrl: 'https://sqs.us-east-1.amazonaws.com/320727982031/my-practice',
          //     region: 'us-east-1',
          //   },
          // ],
        };
      },
      inject: [ConfigService],
    }),
    UploadModule,
  ],
  controllers: [AppController, EmailController],
  providers: [AppService, MailerService],
})
export class AppModule {}
