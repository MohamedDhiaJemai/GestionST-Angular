import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';


export interface FileStatus {
  filename: string;
  progress: number;
  hash: string;
  uuid: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScreensaverBorneService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getImage(id: number): Observable<Blob> {
    return this.httpClient.get(environment.apiUrl + 'screensaver/get/' + id,
      { responseType: 'blob', headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) },
    );
  }
  getFileType(id: number) {
    return this.httpClient.get(environment.apiUrl + 'screensaver/file-type/' + id,
      { responseType: 'text', headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) },
    );
  }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'screensaver/' + id, file,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken(), }), reportProgress: true, },
    );
  }

}

