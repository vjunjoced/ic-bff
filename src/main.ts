import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);

  await app.listen(configService.port);

  Logger.log(`Bff is running on port ${configService.port}`, 'Bootstrap');
}

bootstrap();
