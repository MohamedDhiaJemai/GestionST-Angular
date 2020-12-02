import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceStComplementaireService {

  apiUrl = 'http://192.168.0.143:8443/complementaire';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }

  getAllService(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findById(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<ServiceST>(this.apiUrl + '/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  updateService(id: number, serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addService(serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }
}
