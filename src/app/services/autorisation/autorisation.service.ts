import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { JwtHelper } from 'angular2-jwt';
import { Autorisation } from 'app/model/Autorisation.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  username: string;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService, private router: Router) { }
  findAutorisationsByRole(username: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'autorisations/role/' + username,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateAutorisationRole(autorisation: Autorisation) {
    return this.httpClient.put(environment.apiUrl + 'autorisations/role/update', autorisation,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateAutorisationUser(autorisation: Autorisation) {
    return this.httpClient.put(environment.apiUrl + 'autorisations/user/update', autorisation,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findAutorisationsByUser(username: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'autorisations/utilisateur/' + username,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }


  findAutorisations(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'autorisations/utilisateur/'
      + this.jwtHelper.decodeToken(this.tokenUtil.getToken()).sub,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  setAutorisations(autorisations: Autorisation[]) {
    let array = new Array<any>();
    autorisations.forEach(element => {
      let obj = { metier: element.tache.metier, edition: element.edition, consultation: element.consultation };
      array.push(obj);
    });
    localStorage.setItem('autorisations', JSON.stringify(array));
  }
  checkAutorisations1(metier: string) {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    let edition = false;
    let consultation = false;
    if (roless.includes('ADMIN')) {
      edition = true;
      consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === metier) {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          edition = element.edition;
          consultation = element.consultation;
        }
      });
    }
    return { edition: edition, consultation: consultation };
  }
  checkAutorisations2(metier1: string, metier2: string) {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    let edition = false;
    let consultation = false;
    let consultationSup = false;
    if (roless.includes('ADMIN')) {
      edition = true;
      consultation = true;
      consultationSup = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === metier1) {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          edition = element.edition;
          consultation = element.consultation;
        }
        if (element.metier === metier2) {
          consultationSup = element.consultation;
        }
      });
    }
    return { edition: edition, consultation: consultation, consultationSup: consultationSup };
  }
}
