import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategorieDto {

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  etiquette: string;
}
