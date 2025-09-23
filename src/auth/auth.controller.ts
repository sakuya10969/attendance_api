import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('sign-in')
  async signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token', {
      path: '/',
      domain: process.env.COOKIE_DOMAIN || undefined,
    });
    return { ok: true };
  }
}
