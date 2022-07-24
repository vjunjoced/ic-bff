import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { ExampleModule } from './modules/example/example.module';
import { BrokerServicesModule } from './core/broker-services/client-micro-services.module';

@Module({
  imports: [AppConfigModule, ExampleModule, BrokerServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
