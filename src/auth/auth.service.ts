import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService
    ) {}

    async signUp(signUpDto: SignUpDto) {
        const user = await this.userService.create(signUpDto);
        return user;
    }

    async signIn(signInDto: SignInDto) {
        const user = await this.userService.findByEmail(signInDto.email);

        if (!user || !(await bcrypt.compare(signInDto.password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { sub: user.id, email: user.email };
        const accessToken = await this.jwtService.signAsync(payload, {
            expiresIn: '6d',
          });

        return {
            accessToken,
            user: {
                id: user.id,
                email: user.email,
            },
      };
    }
}
