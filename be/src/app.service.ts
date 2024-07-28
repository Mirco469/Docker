import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { hello: 'Custom hello world from NestJs!' };
  }
}
