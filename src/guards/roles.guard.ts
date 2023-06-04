import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    // The request.user should have come from JWT 
    if (request.query?.name) {
      const hardCodedUser = { name: request.query?.name, roles: ['ultra', 'admin'] };
      request.user = hardCodedUser;
    }

    const user = request.user;

    return this.matchRoles(roles, user.roles);
  }

  private matchRoles(roles: string[], userRoles: string[]): boolean {
    return userRoles.some(role => roles.includes(role));
  }
}
