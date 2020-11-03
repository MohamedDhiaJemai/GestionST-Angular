import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:9090';

  private jwtToken = null;

  private roles: Array<any> = [];

  username: string;

  constructor() { }
}
