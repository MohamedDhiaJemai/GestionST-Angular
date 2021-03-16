import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private httpClient: HttpClient) { }
  getImage(id: number): Observable<Blob> {
    return this.httpClient.get(environment.apiUrl + 'screensaver/get/' + id, { responseType: 'blob' });
  }
  getFileType(id: number) {
    return this.httpClient.get(environment.apiUrl + 'screensaver/file-type/' + id, { responseType: 'text' });
  }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'screensaver/' + id, file, { reportProgress: true });
  }

}

