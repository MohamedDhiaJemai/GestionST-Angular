import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  apiUrl = 'http://192.168.0.143:8443/stocks';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }
}
