import { IsNumber, IsString } from 'class-validator';

export class CreateReservationDto{
  @IsNumber()
  id: number; 

  @IsString()
  date_res: string;

  @IsString()
  prix_loc: number;
}