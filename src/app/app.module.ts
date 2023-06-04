import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusclesModule } from '@/muscles/muscles.module';
import { LoggerMiddleware } from '@/common/logger.middleware';

@Module({
  imports: [MusclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'muscles', method: RequestMethod.GET });
  }
}
