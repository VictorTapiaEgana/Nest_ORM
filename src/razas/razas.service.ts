import { Injectable } from '@nestjs/common';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Raza } from './entities/raza.entity';
import { Repository } from 'typeorm';

@Injectable()
  export class RazasService {
  
  constructor(
    @InjectRepository(Raza)
    private readonly razaRepocitory:Repository<Raza>
  ){}
  
  async create(createRazaDto: CreateRazaDto) {
  
    const raza = this.razaRepocitory.create(createRazaDto)
    await this.razaRepocitory.save(raza)
    return `Raza: ${createRazaDto.nombre} , Creada correctamente`
    
  }
  
  async findAll() {
    return  await this.razaRepocitory.find()
  }
  
  findOne(id: number) {
    return `This action returns a #${id} raza`;
  }
  
  update(id: number, updateRazaDto: UpdateRazaDto) {
    return `This action updates a #${id} raza`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} raza`;
  }
  
}
