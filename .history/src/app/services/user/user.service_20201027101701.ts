import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:9090/utilisateurs';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
