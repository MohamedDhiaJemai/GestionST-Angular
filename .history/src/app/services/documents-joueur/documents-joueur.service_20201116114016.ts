import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { DocumentsJoueur } from 'app/model/DocumentsJoueur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsJoueurService {

  apiUrl = 'http://192.168.0.143:8443/documents';
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

  upload(file: File): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/', file,
      {
        headers: new HttpHeaders({
          'authorization': this.jwtToken,
          // 'Content-Type':'multipart/form-data; boundary=<calculated when request is sent>',
        }), reportProgress: true,
      },
    );
  }

  getFiles(): Observable<any> {
    //return this.http.get(`${this.baseUrl}/files`);

    return this.httpClient.get(this.apiUrl + '/', file,
    {
      headers: new HttpHeaders({
        'authorization': this.jwtToken,
        // 'Content-Type':'multipart/form-data; boundary=<calculated when request is sent>',
      }), reportProgress: true,
    },
  );

  }
}
