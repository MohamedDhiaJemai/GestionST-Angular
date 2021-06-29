import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JAcademieSearch } from 'app/model/JAcademieSearch.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurAcademieService {
  constructor(private httpClient: HttpClient) { }
  getAlljAcademie(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'academie/all');
  }
  getAlljAcademieNonValider(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'academie/non-valide');
  }
  addjAcademie(jAcademie: JoueurAcamedie) {
    return this.httpClient.post(environment.apiUrl + 'academie/add', jAcademie);
  }
  updatejAcademie(id: number, jAcademie: JoueurAcamedie) {
    return this.httpClient.put(environment.apiUrl + 'academie/update/' + id, jAcademie);
  }
  validerjAcademie(id: number, jAcademie: JoueurAcamedie) {
    return this.httpClient.put(environment.apiUrl + 'academie/valider/' + id, jAcademie);
  }
  findById(id: number) {
    return this.httpClient.get<JoueurAcamedie>(environment.apiUrl + 'academie/' + id);
  }
  findByParent(id: number) {
    return this.httpClient.get<JoueurAcamedie>(environment.apiUrl + 'academie/parent/' + id);
  }
  find(params: JAcademieSearch): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'academie/find', params);
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + 'academie/' + id);
  }
}
