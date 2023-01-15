import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './create-reservation.dto';
import { Reservation } from './reservation.entity';
import { UpdateReservationDto } from './update-reservation.dto';
import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {};

  getReservations(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  createReservation(createReservationDto : CreateReservationDto) {
    return this.reservationRepository.save(createReservationDto);
  }

  updateReservation(updateReservationDto: UpdateReservationDto, reservationId: number) {
    return { body : updateReservationDto, reservationId };
  }

  showReservation( reservationId: number) {
    return this.reservationRepository.findOne({
      where: {id: reservationId}
    });
  }

  removeReservation(reservationid: number) {
    return this.reservationRepository.delete(reservationid);
  }
}