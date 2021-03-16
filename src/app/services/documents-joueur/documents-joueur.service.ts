import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsJoueurService {
  constructor(private httpClient: HttpClient) { }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'documents/' + id, file, { reportProgress: true });
  }
  deleteFile(id: number, nom: string): any {
    return this.httpClient.delete(environment.apiUrl + 'documents/' + id + '/' + nom);
  }
  getFiles(id): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'documents/' + id);
  }
  viewFile(id: number, nom: string): any {
    return this.httpClient.get(environment.apiUrl + 'documents/' + id + '/' + nom);
  }
}
