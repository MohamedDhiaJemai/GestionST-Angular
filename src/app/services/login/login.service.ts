import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { environment } from 'environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }
  login(userAuthentification: UserAuthentification) {
    return this.httpClient.post(environment.apiUrl + 'login', userAuthentification, { observe: 'response' });
  }
  logout() {
    localStorage.clear();
    this.tokenService.clearToken();
  }
}
