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

  async create(createAnimaleDto: CreateAnimaleDto) {

    const animal =  this.animalesRepocitory.create(createAnimaleDto)
    this.animalesRepocitory.save(animal)

    return `${createAnimaleDto.nombre} Creado exitosamente`;
 }

  async findOne(id: number) {
    return await this.animalesRepocitory.findOneBy({ id });
  }

  async update(id: number, updateAnimaleDto: UpdateAnimaleDto) {

    const animal = this.animalesRepocitory.create(updateAnimaleDto)
    return await this.animalesRepocitory.update(id, animal)
    
  }

  async remove(id: number) {
    return await this.animalesRepocitory.softDelete({id})
  }

}
