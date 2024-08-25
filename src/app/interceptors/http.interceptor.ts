import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, throwError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '../services/errorhandler.service';

// Define the functional interceptor
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  // Use Angular's dependency injection to get the Router
  const router = inject(Router);
  const errorHandler = inject(ErrorHandler);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('An error occurred:', error.message);

      errorHandler.handleError(error);

      return of();
      // Return a user-facing error message
      // return throwError(() => new Error('Something went wrong; please try again later.'));
    })
  );
};