import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionnementService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findByArticle(id): Observable<any> {
    return this.httpClient.get<Approvisonnement>(environment.apiUrl + 'approvisionnement/article/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByStock(id) {
    return this.httpClient.get<Approvisonnement>(environment.apiUrl + 'approvisionnement/stock' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  deleteStock(id) {
    return this.httpClient.delete<Approvisonnement>(environment.apiUrl + 'approvisionnement/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addApprovisonnement(approvisionnement: Approvisonnement) {
    return this.httpClient.post(environment.apiUrl + 'approvisionnement/add', approvisionnement,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<ApprovisionnementService>(environment.apiUrl + 'approvisionnement/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
