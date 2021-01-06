import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable, Subject } from 'rxjs';
import { Upload } from 'tus-js-client';


export interface FileStatus {
  filename: string;
  progress: number;
  hash: string;
  uuid: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScreensaverBorneService {

  apiUrl = 'http://192.168.0.143:8443/screensaver';
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

  // getImage(id: number): Observable<Blob> {
  //   return this.httpClient.get(this.apiUrl + '/' + id, { responseType: 'blob' });
  // }

    getImage(id: number): Observable<Blob> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/get/' + id,
      { responseType: 'blob', headers: new HttpHeaders({ 'authorization': this.jwtToken }) },
    );
  }


  upload(file: any, id: number): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }

    return this.httpClient.post(this.apiUrl + '/' + id, file,
      {
        headers: new HttpHeaders({
          'authorization': this.jwtToken,
        }), reportProgress: true,
      },
    );
  }

}

