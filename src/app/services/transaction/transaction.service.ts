import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Transaction } from 'app/model/Transaction.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllTrascation(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'transaction/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Transaction>(environment.apiUrl + 'transaction/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
