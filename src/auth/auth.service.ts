import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return {
        _id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, id: user._id, role: user.role};
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }
}
