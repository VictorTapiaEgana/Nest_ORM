import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Animal {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    edad:number;

    @Column({ nullable:true})
    raza?:string

    @DeleteDateColumn()
    borradoEn?:Date;
}
