import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAnimaleDto } from './dto/create-animale.dto';
import { UpdateAnimaleDto } from './dto/update-animale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animale.entity';
import { Repository } from 'typeorm';
import { Raza } from 'src/razas/entities/raza.entity';

@Injectable()
export class AnimalesService {

  constructor(

    @InjectRepository(Animal)
     private animalesRepocitory:Repository<Animal>,

    @InjectRepository(Raza)
    private readonly razaRepocitory:Repository<Raza>

  ){}

  findAll() {
    return this.animalesRepocitory.find()
  }

  async create(createAnimaleDto: CreateAnimaleDto) {

    const raza = await this.razaRepocitory.findOneBy({
      id_raza: createAnimaleDto.raza
    })

    if(!raza){
      throw new BadRequestException('Raza no existe')
    }

      const animal =  this.animalesRepocitory.create({
        nombre:createAnimaleDto.nombre,
        edad:createAnimaleDto.edad,
        color:createAnimaleDto.color,        
        raza        
      })

      await this.animalesRepocitory.save(animal)

    return `${createAnimaleDto.nombre} Creado exitosamente`;
 }

  async findOne(id: number) {
    return await this.animalesRepocitory.findOneBy({ id });
  }

  async update(id: number, updateAnimaleDto: UpdateAnimaleDto) {

    // const animal = this.animalesRepocitory.create(updateAnimaleDto)
    // return await this.animalesRepocitory.update(id, animal)
    
  }

  async remove(id: number) {
    return await this.animalesRepocitory.softDelete({id})
  }

}
