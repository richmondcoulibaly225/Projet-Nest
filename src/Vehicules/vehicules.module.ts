import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculeRepository } from './vehicule.repository';
import { VehiculeService } from './vehicules.service';
import { VehiculeController } from './vehicules.controller';
//import { User } from './user.entity';

@Module({
  controllers: [VehiculeController],
  providers: [VehiculeService, VehiculeRepository],
})
export class VehiculeModule {}