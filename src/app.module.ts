import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from "@nestjs/config";
import { Mail } from "./mail/mail.model";
import { OutsModule } from './outs/outs.module';
import { Outs } from "./outs/outs.model";
import { DeltModule } from './delt/delt.module';
import { Delt } from "./delt/delt.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Mail , Outs , Delt],
            autoLoadModels: true
          }),
        MailModule,
        OutsModule,
        DeltModule,
    ]
})
export class AppModule {}