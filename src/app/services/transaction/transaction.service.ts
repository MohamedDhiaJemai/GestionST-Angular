import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'app/model/Transaction.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { TransactionSearch } from 'app/model/TransactionSearch.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private httpClient: HttpClient) { }
  getAllTrascation(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'transaction/all');
  }
  getToday(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'transaction/today');
  }
  findById(id) {
    return this.httpClient.get<Transaction>(environment.apiUrl + 'transaction/' + id);
  }

  find(params: TransactionSearch): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'transaction/find', params);
  }
}
