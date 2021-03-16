import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Remise } from 'app/model/remise.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemiseService {
  constructor(private httpClient: HttpClient) { }
  getAllRemise(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'remise/all');
  }
  addRemise(remise: Remise) {
    return this.httpClient.post(environment.apiUrl + 'remise/add', remise);
  }
  updateRemise(id: number, remise: Remise) {
    return this.httpClient.put(environment.apiUrl + 'remise/update/' + id, remise);
  }
  findById(id) {
    return this.httpClient.get<Remise>(environment.apiUrl + 'remise/' + id);
  }
}
