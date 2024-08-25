import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'https://reqres.in/api/users'

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<any>(this.apiUrl).pipe(map(response => response.data));
    // catchError(this.handleError)
  }

  getUser(id: number):Observable<User>{
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(map(response => response.data));  
  }

  private handleError(error: HttpErrorResponse){
    return throwError(()=> new Error("Something went wrong!"));
  }
}
