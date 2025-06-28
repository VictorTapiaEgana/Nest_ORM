import { Module } from '@nestjs/common';
import { AnimalesModule } from './animales/animales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AnimalesModule,
            TypeOrmModule.forRoot({
                    type:'mysql',
                    host:'localhost',
                    username:'root',
                    password:'MordorW2K5@#',
                    port:3306,
                    database:'animales',                    
                    autoLoadEntities:true,
                    synchronize:true,                    
            })  
  ],
  
  controllers: [],
  providers: [],
})

export class AppModule {}
