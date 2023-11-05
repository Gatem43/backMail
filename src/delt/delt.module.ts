import { Module } from '@nestjs/common';
import { DeltService } from './delt.service';
import { DeltController } from './delt.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Delt } from './delt.model';

@Module({
  providers: [DeltService],
  controllers: [DeltController],
  imports: [
    SequelizeModule.forFeature([Delt])
  ]
})
export class DeltModule {}
