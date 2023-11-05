import { Controller , Post , Body , Get, Delete, Param} from '@nestjs/common';
import { createMailDto } from './dto/create-mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {

    constructor(private mailService: MailService){}

    @Post()
    create(@Body() mailDto: createMailDto) {
        return this.mailService.createMail(mailDto);
    }

    @Get()
    getAll() {
        return this.mailService.getMail();
    }

    @Delete(':id')
    delMail(@Param('id') id:string ) {
        return this.mailService.delMail(+id)
    }
}
