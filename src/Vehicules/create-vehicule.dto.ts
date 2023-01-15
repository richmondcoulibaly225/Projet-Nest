import { IsNumber, IsString } from 'class-validator';

export class CreateVehiculeDto{
  @IsNumber()
  id: number; 

  @IsString()
  type: string;

  @IsString()
  couleur: string;

  @IsString()
  marque: string;

  @IsString()
  model: string;
}