import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borne } from 'app/model/Borne.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BorneService {
  constructor(private httpClient: HttpClient) { }
  getAllBorne(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'borne/all');
  }
  addBorne(borne: Borne) {
    return this.httpClient.post(environment.apiUrl + 'borne/add', borne);
  }
  maintenance(id: number) {
    return this.httpClient.post(environment.apiUrl + 'borne/maintenance/' + id, null);
  }
  updateBorne(id: number, borne: Borne) {
    return this.httpClient.put(environment.apiUrl + 'borne/update/' + id, borne);
  }
  findById(id) {
    return this.httpClient.get<Borne>(environment.apiUrl + 'borne/' + id);
  }
}
