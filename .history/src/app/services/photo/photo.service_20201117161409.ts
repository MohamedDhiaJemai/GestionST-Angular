import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl = 'http://192.168.0.143:8443/photo';
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

  upload(file: any, id: number): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }

    return this.httpClient.post(this.apiUrl + '/photo/' + id, file,
      {
        headers: new HttpHeaders({
          'authorization': this.jwtToken,
        }), reportProgress: true,
      },
    );
  }

  // getImage(id: number): Observable<Blob> {
  //   if (this.jwtToken == null) { this.loadToken(); }
  //   if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
  //   return this.httpClient.get(this.apiUrl + '/get/' + id,
  //     { responseType: 'blob', headers: new HttpHeaders({ 'authorization': this.jwtToken }) },
  //   );
  // }

}
