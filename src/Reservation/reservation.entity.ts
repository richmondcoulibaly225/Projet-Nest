import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Vehicule } from 'src/Vehicules/vehicule.entity';
import { User } from 'src/Users/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date_res: string;

  @Column()
  prix_loc: number;

  @OneToOne(() => Vehicule)
  @JoinColumn()
  vehicule: Vehicule

  @OneToOne(() => User)
  @JoinColumn()
  user: User


}