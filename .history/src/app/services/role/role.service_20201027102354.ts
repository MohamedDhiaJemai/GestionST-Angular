import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl = 'http://localhost:9090/roles';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
