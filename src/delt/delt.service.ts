import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Delt } from './delt.model';
import { deltDto } from './dto/delt-dto';

@Injectable()
export class DeltService {

    constructor(@InjectModel(Delt) private deltRepository: typeof  Delt) {}

    async createMail(dto: deltDto) {
        const mail = await this.deltRepository.create(dto);
        return mail;
    }
    
    async delMail(id: number) {
        const del = await this.deltRepository.destroy({
            where: {id}
        })
        if (del === 1) {
           return id
        }
    }
}
