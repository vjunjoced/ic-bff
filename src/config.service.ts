import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get('appConfig.port');
  }

  get rmqUrl(): string {
    return this.configService.get('appConfig.rmqUrl');
  }

  get serviceUserQueue(): string {
    return this.configService.get('appConfig.serviceUserQueue');
  }

  get servicePostQueue(): string {
    return this.configService.get('appConfig.servicePostQueue');
  }
}
