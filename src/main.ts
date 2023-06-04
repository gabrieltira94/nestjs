import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from '@/common/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true
    }),
  );

  // To use Logger middleware as Global
  // app.use(LoggerMiddleware);

  await app.listen(3001);
}
bootstrap();
