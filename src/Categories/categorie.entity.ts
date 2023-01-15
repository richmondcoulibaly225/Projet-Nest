import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  etiquette: string;
}