import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateReservationDto {
  @IsNotEmpty()
  @IsString()
  date_res: string;

  @IsNotEmpty()
  @IsString()
  prix_loc: number;

}
