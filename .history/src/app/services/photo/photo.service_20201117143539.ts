import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  apiUrl = 'http://192.168.0.143:8443/documents';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
