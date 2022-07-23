import { UserProxyService } from 'src/core/broker-services/user-proxy/user-proxy.service';
import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from 'src/config.service';

@Controller('example')
export class ExampleController {
  constructor(
    private configService: AppConfigService,
    private userService: UserProxyService,
  ) {
    console.log(this.configService.port);
  }

  @Get()
  getHello(): string {
    this.userService.test();
    return 'Hello World!';
  }
}
