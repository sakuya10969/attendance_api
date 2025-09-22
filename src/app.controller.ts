import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: AuthenticatedRequest) {
    return this.appService.findById(req.user.userId);
  }
}
