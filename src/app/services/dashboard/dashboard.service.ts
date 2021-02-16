import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = environment.apiUrl + 'dashboard';
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
}
