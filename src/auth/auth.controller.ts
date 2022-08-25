import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // better off use body instead of request
    this.auth.signup();
  }

  @Post('signin')
  signin() {
    this.auth.signin();
  }
}
