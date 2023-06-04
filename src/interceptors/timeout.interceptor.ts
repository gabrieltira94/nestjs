import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException, HttpStatus } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const timeoutTime = 5000;

    return next.handle().pipe(
      timeout(timeoutTime),
      catchError(err => {
        if (err instanceof TimeoutError)
          return throwError(() => new RequestTimeoutException(
            {
              message: `Timeout for this route is set to ${timeoutTime / 1000} seconds.`,
              statusCode: HttpStatus.REQUEST_TIMEOUT
            }
          ));

        return throwError(() => err);
      }),
    );
  };
};
