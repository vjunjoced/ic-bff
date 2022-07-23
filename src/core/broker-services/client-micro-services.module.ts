import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_USER_CLIENT, SERVICE_POST_CLIENT } from './service.const';
import { AppConfigService } from '../../config.service';
import { UserProxyService } from './user-proxy/user-proxy.service';
import { PostProxyService } from './post-proxy/post-proxy.service';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: SERVICE_USER_CLIENT,
        inject: [AppConfigService],
        extraProviders: [AppConfigService],
        useFactory: async (config: AppConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [config.rmqUrl],
            queue: config.serviceUserQueue,
          },
        }),
      },
      {
        name: SERVICE_POST_CLIENT,
        inject: [AppConfigService],
        extraProviders: [AppConfigService],
        useFactory: async (config: AppConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [config.rmqUrl],
            queue: config.servicePostQueue,
          },
        }),
      },
    ]),
  ],
  providers: [UserProxyService, PostProxyService],
  exports: [UserProxyService, PostProxyService],
})
export class BrokerServicesModule {}
