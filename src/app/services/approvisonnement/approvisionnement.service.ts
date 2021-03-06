import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { Article } from 'app/model/Article.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionnementService {
  constructor(private httpClient: HttpClient) { }
  findByArticle(id): Observable<any> {
    return this.httpClient.get<Approvisonnement>(environment.apiUrl + 'approvisionnement/article/' + id);
  }
  findByStock(id) {
    return this.httpClient.get<Approvisonnement>(environment.apiUrl + 'approvisionnement/stock' + id);
  }
  deleteStock(id) {
    return this.httpClient.delete(environment.apiUrl + 'approvisionnement/' + id);
  }

  updateOrdreStock(id, ordre) {
    return this.httpClient.put<Article>(environment.apiUrl + 'approvisionnement/update/' + id + '/' + ordre, null);
  }
  addApprovisonnement(approvisionnement: Approvisonnement) {
    return this.httpClient.post(environment.apiUrl + 'approvisionnement/add', approvisionnement);
  }
  findById(id) {
    return this.httpClient.get<ApprovisionnementService>(environment.apiUrl + 'approvisionnement/' + id);
  }
}
