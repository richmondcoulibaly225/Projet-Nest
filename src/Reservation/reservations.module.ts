import { Module } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { ReservationService } from './reservations.service';
import { ReservationController } from './reservations.controller';
//import { User } from './user.entity';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService, ReservationRepository],
})
export class ReservationModule {}