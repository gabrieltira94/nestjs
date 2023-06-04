import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusclesController } from '@/muscles/muscles.controller';

@Module({
  imports: [],
  controllers: [AppController, MusclesController],
  providers: [AppService],
})
export class AppModule { }
