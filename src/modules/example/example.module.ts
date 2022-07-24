import { Module } from '@nestjs/common';
import { AppConfigService } from 'src/config.service';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService, AppConfigService],
})
export class ExampleModule {}
