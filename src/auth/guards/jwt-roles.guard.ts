import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from 'src/user/roles.decorator';
import { Role } from 'src/user/user.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    try {
      const token = context
        .switchToHttp()
        .getRequest()
        .headers.authorization.replace('Bearer ', '');
      const user: any = this.jwtService.decode(token);
      return requiredRoles.some((role) => user.role?.includes(role));
    } catch (e) {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
