import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimaleDto } from './create-animale.dto';
// import { IsInt, IsOptional } from 'class-validator';

export class UpdateAnimaleDto extends PartialType(CreateAnimaleDto) {

    // @IsOptional()
    // nombre?:string | undefined;

    // @IsOptional()
    // @IsInt()
    // edad?: number | undefined;

    // @IsOptional()
    // color?:string | undefined;

    // @IsOptional()
    // raza?: string | undefined;

}
