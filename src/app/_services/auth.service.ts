import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/'; // Base API URL

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'employee/login',  // Login URL
      {
        email,
        password,
      },
      httpOptions
    );
  }

  // Register method
  register(companyName: string, dateOfIncorporation: string, directorName: string, phoneNumber: string, email: string, password: string, alternatePhoneNumber: string, place: string, district: string, state: string, pinCode: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'companies/signup',  // Signup URL
      {
        companyName,
        dateOfIncorporation,
        directorName,
        phoneNumber,
        email,
        password,
        alternatePhoneNumber,
        address: {
          place,
          district,
          state,
          pinCode
        }
      },
      httpOptions
    );
  }

  // Logout method
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signout', {}, httpOptions);
  }
}
