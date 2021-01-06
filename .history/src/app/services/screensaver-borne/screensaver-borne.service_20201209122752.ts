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

  testFile(file: any, id: number): Observable<any> {

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

