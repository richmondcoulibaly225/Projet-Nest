import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './Users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { VehiculeModule } from './Vehicules/vehicules.module';
import { CategorieModule } from './Categories/categories.module';
import { ReservationModule } from './Reservation/reservations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule, VehiculeModule, CategorieModule, ReservationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}



