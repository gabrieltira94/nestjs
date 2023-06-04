import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusclesModule } from '@/muscles/muscles.module';

@Module({
  imports: [MusclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
