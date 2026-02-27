// refresh token strategy

import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Extractjwt } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: Extractjwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrkey: configService.get<string>('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    });
  }

  // validate refresh token
    async validate(req: Request, payload: { sub: string; email }) {
      
  }
}
