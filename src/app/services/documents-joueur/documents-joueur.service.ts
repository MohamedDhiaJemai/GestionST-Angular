import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsJoueurService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'documents/' + id, file,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken(), }), reportProgress: true });
  }
  deleteFile(id: number, nom: string): any {
    return this.httpClient.delete(environment.apiUrl + 'documents/' + id + '/' + nom,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getFiles(id): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'documents/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  viewFile(id: number, nom: string): any {
    return this.httpClient.get(environment.apiUrl + 'documents/' + id + '/' + nom,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
