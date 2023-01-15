import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateVehiculeDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  couleur: string;

  @IsNotEmpty()
  @IsString()
  marque: string;

  @IsNotEmpty()
  @IsString()
  model: string;
}
