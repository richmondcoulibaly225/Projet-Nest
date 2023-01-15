import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './users.service';
import { UserController } from './users.controller';
//import { User } from './user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}