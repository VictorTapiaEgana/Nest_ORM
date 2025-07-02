import { Raza } from "src/razas/entities/raza.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Animal {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    edad:number;

    @Column()
    color:string;

    @DeleteDateColumn()
    borradoEn?:Date;

    @ManyToOne(()=>Raza,(raza)=>raza.animales , {eager:true})
     raza:Raza;

}
