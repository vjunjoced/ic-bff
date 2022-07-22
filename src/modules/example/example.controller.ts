import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from 'src/config.service';

@Controller('example')
export class ExampleController {
  constructor(private configService: AppConfigService) {
    console.log(this.configService.port);
  }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
