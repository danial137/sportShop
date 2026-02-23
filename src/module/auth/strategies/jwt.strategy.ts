// Jwt Strategy for auth requiest
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JWtStrategy extends PassportStrategy(Strategy) {}
