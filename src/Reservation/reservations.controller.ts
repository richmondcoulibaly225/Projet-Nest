import { Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import { CreateReservationDto } from "./create-reservation.dto";
import { Reservation } from './reservation.entity';
import { ReservationService } from "./reservations.service";

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationsService: ReservationService) { }
    //Recuperer tous les reservations
    @Get()
    async getReservations(): Promise<Reservation[]> {
        return this.reservationsService.getReservations()
    }
    
    //Enregistrer une nouvelle reservation

    @Post()
    store(@Body() createReservationDto: CreateReservationDto) {
        return this.reservationsService.createReservation(createReservationDto);
    }

    //Recuperer un seul
    @Get('/:id')
    getOneVehicule(@Param("id") reservationid: number) {
        return this.reservationsService.showReservation(Number(reservationid));
    }
    
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.reservationsService.removeReservation(Number(id))
    }
}