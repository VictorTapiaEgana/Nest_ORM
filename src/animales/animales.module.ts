import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesController } from './animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animale.entity';
import { Raza } from 'src/razas/entities/raza.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Animal, Raza])],
  controllers: [AnimalesController],
  providers: [AnimalesService],

})

export class AnimalesModule {}
