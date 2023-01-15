import { Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import { CreateVehiculeDto } from "./create-vehicule.dto";
import { Vehicule } from './vehicule.entity';
import { VehiculeService } from "./vehicules.service";

@Controller('vehicule')
export class VehiculeController {
    constructor(private readonly vehiculesService: VehiculeService) { }
    //Recuperer tous les utilisateurs
    @Get()
    async getVehicules(): Promise<Vehicule[]> {
        return this.vehiculesService.getVehicules()
    }
    
    //Enregistrer un nouvel utilisateur
    @Post()
    store(@Body() createVehiculeDto: CreateVehiculeDto) {
        return this.vehiculesService.createVehicule(createVehiculeDto);
    }

    //Recuperer un seul
    @Get('/:id')
    getOneVehicule(@Param("id") vehiculeid: number) {
        return this.vehiculesService.showVehicule(Number(vehiculeid));
    }
    
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.vehiculesService.removeVehicule(Number(id))
    }
}