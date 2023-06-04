import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusclesController } from '@/muscles/muscles.controller';
import { MuscleService } from '@/muscles/muscles.service';

@Module({
  imports: [],
  controllers: [AppController, MusclesController],
  providers: [AppService, MuscleService],
})
export class AppModule { }
