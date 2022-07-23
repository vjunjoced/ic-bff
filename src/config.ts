import { ConfigModule, registerAs } from '@nestjs/config';

interface AppConfig {
  port: number;
  rmqUrl: string;
  serviceUserQueue: string;
  servicePostQueue: string;
}

const AppConfig = registerAs<AppConfig>('appConfig', () => {
  return {
    port: 3000,
    rmqUrl: process.env.RMQ_URL,
    serviceUserQueue: process.env.SERVICE_USER_QUEUE,
    servicePostQueue: process.env.SERVICE_POST_QUEUE,
  };
});

export const AppConfigModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [AppConfig],
});
