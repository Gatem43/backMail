import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Mail } from './mail.model';
import { createMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {

    constructor(@InjectModel(Mail) private mailRepository: typeof Mail ) {}

    async createMail(dto: createMailDto) {
        const mail = await this.mailRepository.create(dto);
        return mail;
    }

    async getMail() {
         const mails = await this.mailRepository.bulkCreate([
            {
                name: 'Повестка',
                description: 'Явится в военкомат до 20.11.2023',
                data: '04.11.2023',
                author: 'voenkom48@mail.ru'
            } ,
            {
                name: 'Повестка2',
                description: 'Явится в военкомат до 21.11.2023',
                data: '05.11.2023',
                author: 'voenkom49@mail.ru'
            } ,
            {
                name: 'Повестка3',
                description: 'Явится в военкомат до 22.11.2023',
                data: '06.11.2023',
                author: 'voenkom50@mail.ru'
            } 
         ])
         return mails;
    }
    
    async delMail(id: number) {
        const del = await this.mailRepository.destroy({
            where: {id}
        })
        if (del === 1) {
           return id
        }
    }
}
