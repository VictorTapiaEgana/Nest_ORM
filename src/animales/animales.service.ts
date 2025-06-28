import { Injectable } from '@nestjs/common';
import { CreateAnimaleDto } from './dto/create-animale.dto';
import { UpdateAnimaleDto } from './dto/update-animale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalesService {

  constructor(

    @InjectRepository(Animal)
     private animalesRepocitory:Repository<Animal>

  ){}

  findAll() {
    return this.animalesRepocitory.find()
  }


  create(createAnimaleDto: CreateAnimaleDto) {

    const animal = this.animalesRepocitory.create(createAnimaleDto)
    this.animalesRepocitory.save(animal)

    return 'This action adds a new animale';

 }

  findOne(id: number) {
    return `This action returns a #${id} animale`;
  }

  update(id: number, updateAnimaleDto: UpdateAnimaleDto) {
    return `This action updates a #${id} animale`;
  }

  remove(id: number) {
    return `This action removes a #${id} animale`;
  }
}
