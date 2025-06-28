import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateAnimaleDto {

        @IsString()
        nombre:string;

        @IsInt()
        @IsPositive()
        edad:number;

        @IsOptional()
        @IsString()
        raza?:string

}
