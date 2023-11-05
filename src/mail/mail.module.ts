import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mail } from './mail.model';

@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [
    SequelizeModule.forFeature([Mail])
  ]
})
export class MailModule {}
