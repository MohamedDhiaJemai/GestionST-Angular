import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageProduitService {
  constructor(private httpClient: HttpClient) { }
  upload(file: any, id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'image/' + id, file, { reportProgress: true });
  }
}
