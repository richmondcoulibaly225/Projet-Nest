import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto{
  @IsNumber()
  id: number; 

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsString()
  email: string;

  @IsNumber()
  age: number;
}