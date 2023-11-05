import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { OutsService } from './outs.service';
import { OutsDto } from './dto/outs-dto';

@Controller('outs')
export class OutsController {

    constructor(private outsService: OutsService){}

    @Post()
    create(@Body() outsDto: OutsDto) {
        return this.outsService.createMail(outsDto);
    }

    @Delete(':id')
    delMail(@Param('id') id:string ) {
        return this.outsService.delMail(+id)
    }
}