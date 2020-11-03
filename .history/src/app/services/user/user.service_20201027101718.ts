import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:9090/utilisateurs';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }
}
