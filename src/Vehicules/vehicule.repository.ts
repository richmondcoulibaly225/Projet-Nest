import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Vehicule } from './vehicule.entity'

@Injectable()
export class VehiculeRepository extends Repository<Vehicule> {
  constructor(private dataSource: DataSource) {
    super(Vehicule, dataSource.createEntityManager());
  }
}
