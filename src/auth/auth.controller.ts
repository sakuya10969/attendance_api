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
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.signIn(signInDto);
    res.cookie('auth_token', user.accessToken, {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 6 * 60 * 60 * 1000,
    });

    return user;
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
