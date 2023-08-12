import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // Hard-coded token for testing purposes
  private hardcodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY5LCJlbWFpbCI6ImVoc2FuLnNoYWhyZXN0YW5pMUBnbWFpbC5jb20iLCJpYXQiOjE2OTE3NzY5OTIsImV4cCI6MTY5MTg2MzM5Mn0.rBDYUbOcnHPk8He0YMYa1cAdG9nXXNj096RsDWvnxsI";

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and set the Authorization header
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.hardcodedToken}`
      }
    });

    return next.handle(modifiedRequest);
  }
}
