import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Caisse } from 'app/model/Caisse.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findCaisse(idBorne: number) {
    return this.httpClient.get<Caisse>(environment.apiUrl + 'caisse/' + idBorne,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findArrets(idBorne: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'caisse/arrets/' + idBorne,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
