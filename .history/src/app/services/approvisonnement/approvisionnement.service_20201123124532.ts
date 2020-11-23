import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionnementService {

  apiUrl = 'http://192.168.0.143:8443/approvisionnement';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
