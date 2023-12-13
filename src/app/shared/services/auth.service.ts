import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environment/environment";
import {jwtDecode} from "jwt-decode";

type TokenResponse = {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/auth/login`, {username, password}).pipe(
        tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(username: string, email: string, password: string): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/auth/signup`, {username, email, password}).pipe(
        tap(res => localStorage.setItem('token', res.token))
    );
  }
}
