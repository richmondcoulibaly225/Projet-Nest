import { IsNumber, IsString } from 'class-validator';

export class CreateCategorieDto{
  @IsNumber()
  id: number; 

  @IsString()
  description: string;

  @IsString()
  etiquette: string;

}