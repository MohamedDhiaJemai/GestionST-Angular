import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Donation } from 'app/model/Donation.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<Donation>(environment.apiUrl + 'donations/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'donations/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
