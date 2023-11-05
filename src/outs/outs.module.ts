import { Module } from '@nestjs/common';
import { OutsController } from './outs.controller';
import { OutsService } from './outs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Outs } from './outs.model';

@Module({
  controllers: [OutsController],
  providers: [OutsService],
  imports: [
    SequelizeModule.forFeature([Outs])
  ]
})
export class OutsModule {}
