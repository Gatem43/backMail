import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Outs } from './outs.model';
import { OutsDto } from './dto/outs-dto';

@Injectable()
export class OutsService {

    constructor(@InjectModel(Outs) private outsRepository: typeof Outs ) {}

    async createMail(dto: OutsDto) {
        const outs = await this.outsRepository.create(dto);
        return outs;
    }

    async delMail(id: number) {
        const del = await this.outsRepository.destroy({
            where: {id}
        })
        if (del === 1) {
            return id
         }
    }
}
