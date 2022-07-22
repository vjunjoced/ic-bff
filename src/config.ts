import { ConfigModule, registerAs } from '@nestjs/config';

export interface AppConfig {
  port: number;
}

const AppConfig = registerAs<AppConfig>('appConfig', () => {
  return {
    port: 3000
  };
});

export const AppConfigModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [AppConfig]
});
