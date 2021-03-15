import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Autorisation } from 'app/model/Autorisation.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  username: string;
  jwtHelper: JwtHelperService = new JwtHelperService();
  autorisationsList: Autorisation[];
  autorisationsArray: any[];
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
  setAutorisations(auts: Autorisation[]) {
    this.autorisationsArray = new Array<any>();
    this.autorisationsList = auts;
    auts.forEach(element => {
      let obj = { metier: element.tache.metier, edition: element.edition, consultation: element.consultation };
      this.autorisationsArray.push(obj);
    });
    localStorage.setItem('autorisations', JSON.stringify(this.autorisationsArray));
    this.router.navigateByUrl('/');
  }

  getAutorisations(): Array<any> {
    if (this.autorisationsArray === undefined) {
      this.autorisationsArray = JSON.parse(localStorage.getItem('autorisations'));
      return this.autorisationsArray;
    } else {
      return this.autorisationsArray;
    }
  }
  clearAutorisations() {
    this.autorisationsList = undefined;
    this.autorisationsArray = undefined;
  }
  checkAutorisations1(metier: string) {
    if (this.autorisationsArray === undefined) {
      this.autorisationsArray = JSON.parse(localStorage.getItem('autorisations'));
    }
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    let edition = false;
    let consultation = false;
    if (roless.includes('ADMIN')) {
      edition = true;
      consultation = true;
    } else {
      this.autorisationsArray.forEach(element => {
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
    if (this.autorisationsArray === undefined) {
      this.autorisationsArray = JSON.parse(localStorage.getItem('autorisations'));
    }
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    let edition = false;
    let consultation = false;
    let consultationSup = false;
    if (roless.includes('ADMIN')) {
      edition = true;
      consultation = true;
      consultationSup = true;
    } else {
      this.autorisationsArray.forEach(element => {
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
