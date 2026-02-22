import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // Register a new user

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const { email, password, firstName, lastName } = registerDto;

    const existtingUser = await this.prisma.user.findUnique({
      where: { email },
    });
      if (existtingUser) {
          throw new ConflictException("User with this email already exists");
      }

      try {
          
          const hashedPassword=await bcrypt.hash(password,this.SALT_ROUNDS)
        
      } catch (error) {}
  }
}
