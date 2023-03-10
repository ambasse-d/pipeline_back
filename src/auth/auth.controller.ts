import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiOperation({ summary: 'login route' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully logged.',
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/protected')
  @ApiOperation({ summary: 'Protected route' })
  @ApiResponse({
    status: 200,
    description: 'Protected route.',
  })
  getHello(@Request() req): string {
    return req.user;
  }
}
