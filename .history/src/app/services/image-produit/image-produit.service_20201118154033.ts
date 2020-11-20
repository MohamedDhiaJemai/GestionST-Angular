import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageProduitService {

  apiUrl = 'http://192.168.0.143:8443/photo';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
