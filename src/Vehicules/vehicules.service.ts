import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { CreateVehiculeDto } from './create-vehicule.dto';
import { UpdateVehiculeDto } from './update-vehicule.dto';
import { Vehicule } from './vehicule.entity';
import { VehiculeRepository } from './vehicule.repository';

@Injectable()
export class VehiculeService {
  constructor(private readonly vehiculeRepository: VehiculeRepository) {};

  getVehicules(): Promise<Vehicule[]> {
    return this.vehiculeRepository.find();
  }

  createVehicule(createVehiculeDto : CreateVehiculeDto) {
    return this.vehiculeRepository.save(createVehiculeDto);
  }

  updateVehicule(updateVehiculeDto: UpdateVehiculeDto, vehiculeId: number) {
    return { body : updateVehiculeDto, vehiculeId };
  }

  showVehicule( vehiculeId: number) {
    return this.vehiculeRepository.findOne({
      where: {id: vehiculeId}
    });
  }

  removeVehicule(vehiculeid: number) {
    return this.vehiculeRepository.delete(vehiculeid);
  }
}