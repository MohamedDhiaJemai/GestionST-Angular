import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class ImageProduitService {

  apiUrl = 'http://192.168.0.143:8443/image';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }
  
}
