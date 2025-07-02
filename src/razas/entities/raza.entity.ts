import { IsString } from "class-validator";
import { Animal } from "src/animales/entities/animale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Raza {

    @PrimaryGeneratedColumn()
    id_raza:number

    @Column({length:200})
    @IsString()
    nombre:string

    @OneToMany(()=>Animal ,(animal)=>animal.raza)
    animales:Animal[]

}
