import { Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import { CreateCategorieDto } from "./create-categorie.dto";
import { Categorie } from './categorie.entity';
import { CategorieService } from "./categories.service"

@Controller('categorie')
export class CategorieController {
    constructor(private readonly categorieService: CategorieService) { }
    //Recuperer tous les utilisateurs
    @Get()
    async getCategories(): Promise<Categorie[]> {
        return this.categorieService.getCategories()
    }
    
    //Enregistrer un nouvel utilisateur
    @Post()
    store(@Body() createCategorieDto: CreateCategorieDto) {
        return this.categorieService.createCategorie(createCategorieDto);
    }

    //Recuperer un seul
    @Get('/:id')
    getOneCategorie(@Param("id") categorieid: number) {
        return this.categorieService.showCategorie(Number(categorieid));
    }
    
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.categorieService.removeCategorie(Number(id))
    }
}