import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest<Request>();
    const token = this.getToken(req);
    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      (req as any).user = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private getToken(req: Request) {
    const cookieToken = req.cookies?.['auth_token'];
    if (cookieToken) return cookieToken;

    const h = req.headers['authorization'];
    if (typeof h === 'string' && h.startsWith('Bearer ')) return h.slice(7);
    return null;
  }
}
