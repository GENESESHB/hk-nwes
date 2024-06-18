import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  getData(): string {
    return 'Welcome to your NestJS app!';
  }
}

