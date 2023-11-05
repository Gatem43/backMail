import { Controller , Post , Body , Delete, Param} from '@nestjs/common';
import { deltDto } from './dto/delt-dto';
import { DeltService } from './delt.service';


@Controller('delt')
export class DeltController {

    constructor(private deltService: DeltService){}

    @Post()
    create(@Body() mailDto: deltDto) {
        return this.deltService.createMail(mailDto);
    }

    @Delete(':id')
    delMail(@Param('id') id:string ) {
        return this.deltService.delMail(+id)
    }
}