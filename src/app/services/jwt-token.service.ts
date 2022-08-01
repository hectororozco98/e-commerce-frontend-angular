import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtToken } from '../models/jwtToken';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  resetUrl: string = `${environment.baseUrl}/api/users`;
  constructor(private http: HttpClient) { }

  createChangePassword(jwt: JwtToken, newPassword: string) {

    const payload = { token: jwt, password: newPassword };
    return this.http.post<any>(`${this.resetUrl + '/password-reset-request'}`, payload, { headers: environment.headers, withCredentials: environment.withCredentials });

  }
}
