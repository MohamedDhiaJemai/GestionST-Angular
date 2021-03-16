import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  constructor(private httpClient: HttpClient) { }
  getAllParent(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'parent/all');
  }
  addParent(parent: Parent) {
    return this.httpClient.post(environment.apiUrl + 'parent/add', parent);
  }
  updateParent(id: number, parent: Parent) {
    return this.httpClient.put(environment.apiUrl + 'parent/update/' + id, parent);
  }
  findById(id) {
    return this.httpClient.get<Parent>(environment.apiUrl + 'parent/' + id);
  }
}
