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

  deleteFile(id: number, nom: string): any{
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.delete(this.apiUrl + '/' + id + '/' + nom,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  getFiles(id): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/get/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  viewFile(id: number, nom: string): any {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/' + id + '/' + nom,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

}
