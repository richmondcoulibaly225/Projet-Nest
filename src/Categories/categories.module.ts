import { Module } from '@nestjs/common';
import { CategorieRepository } from './categorie.repository';
import { CategorieService } from './categories.service';
import { CategorieController } from './categories.controller';


@Module({
  controllers: [CategorieController],
  providers: [CategorieService, CategorieRepository],
})
export class CategorieModule {}