import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from 'app/model/Donation.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<Donation>(environment.apiUrl + 'donations/' + id);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'donations/all');
  }
}
