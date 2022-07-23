import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_USER_CLIENT } from '../service.const';

@Injectable()
export class UserProxyService {
  constructor(@Inject(SERVICE_USER_CLIENT) private client: ClientProxy) {}

  async test(): Promise<void> {
    this.client.send<string>('test', {}).subscribe((res) => {
      console.log(res);
    });
  }
}
