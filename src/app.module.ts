import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [AppConfigModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
