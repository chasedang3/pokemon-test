import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    // Run the default guard logic (username/password validation)
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Throw error if user is not valid
    if (err || !user) {
      throw err || new UnauthorizedException('Invalid username or password');
    }
    return user;
  }
}
