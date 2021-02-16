import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoTestService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'photo-test/' + id, file,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken(), }), reportProgress: true });
  }
}
