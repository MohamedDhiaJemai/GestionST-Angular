import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurAcademieService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAlljAcademie(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'academie/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAlljAcademieNonValider(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'academie/non-valide',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addjAcademie(jAcademie: JoueurAcamedie) {
    return this.httpClient.post(environment.apiUrl + 'academie/add', jAcademie,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updatejAcademie(id: number, jAcademie: JoueurAcamedie) {
    return this.httpClient.put(environment.apiUrl + 'academie/update/' + id, jAcademie,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  validerjAcademie(id: number, jAcademie: JoueurAcamedie) {
    return this.httpClient.put(environment.apiUrl + 'academie/valider/' + id, jAcademie,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<JoueurAcamedie>(environment.apiUrl + 'academie/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByParent(id) {
    return this.httpClient.get<JoueurAcamedie>(environment.apiUrl + 'academie/parent/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
