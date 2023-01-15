import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Categorie } from './categorie.entity'

@Injectable()
export class CategorieRepository extends Repository<Categorie> {
  constructor(private dataSource: DataSource) {
    super(Categorie, dataSource.createEntityManager());
  }
}
