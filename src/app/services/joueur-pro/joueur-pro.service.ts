import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurProService {
  constructor(private httpClient: HttpClient) { }
  getAlljProfessionnel(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'professionnel/all');
  }
  addjProfessionnel(jProfessionnel: JoueurPro) {
    return this.httpClient.post(environment.apiUrl + 'professionnel/add', jProfessionnel);
  }
  updatejProfessionnel(id: number, jProfessionnel: JoueurPro) {
    return this.httpClient.put(environment.apiUrl + 'professionnel/update/' + id, jProfessionnel);
  }
  findById(id) {
    return this.httpClient.get<JoueurPro>(environment.apiUrl + 'professionnel/' + id);
  }
}
