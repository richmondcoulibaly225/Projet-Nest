import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { CreateCategorieDto } from './create-categorie.dto';
import { UpdateCategorieDto } from './update-vehicule.dto';
import { Categorie } from './categorie.entity';
import { CategorieRepository } from './categorie.repository';

@Injectable()
export class CategorieService {
  constructor(private readonly categorieRepository: CategorieRepository) {};

  getCategories(): Promise<Categorie[]> {
    return this.categorieRepository.find();
  }

  createCategorie(createCategorieDto : CreateCategorieDto) {
    return this.categorieRepository.save(createCategorieDto);
  }

  updateCategorie(updateCategorieDto: UpdateCategorieDto, categorieId: number) {
    return { body : updateCategorieDto, categorieId };
  }

  showCategorie( categorieId: number) {
    return this.categorieRepository.findOne({
      where: {id: categorieId}
    });
  }

  removeCategorie(categorieid: number) {
    return this.categorieRepository.delete(categorieid);
  }
}