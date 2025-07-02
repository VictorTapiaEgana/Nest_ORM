import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateAnimaleDto {

        @IsString()
        nombre:string;

        @IsInt()
        @IsPositive()
        edad:number;

        @IsString()
        color:string
        
        @IsInt() 
        @IsPositive()
        raza:number

}
