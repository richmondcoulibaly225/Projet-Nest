import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Categorie } from 'src/Categories/categorie.entity';

@Entity()
export class Vehicule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  couleur: string;

  @Column()
  marque: string;

  @Column()
  model: string;

  @OneToOne(() => Categorie)
  @JoinColumn()
  categorie: Categorie


}