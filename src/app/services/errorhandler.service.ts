import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {

  constructor(private router: Router) {}

  handleError(error: any) {
    console.error('An error occurred:', error);
    // Redirect to the error page
    this.router.navigate(['/error']);
  }
}