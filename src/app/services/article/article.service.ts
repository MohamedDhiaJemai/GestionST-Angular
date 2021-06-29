import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'app/model/Article.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }
  getAllArticle(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'article/all');
  }
  addArticle(article: Article): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'article/add', article);
  }
  updateArticle(id: number, article: Article) {
    return this.httpClient.put(environment.apiUrl + 'article/update/' + id, article);
  }
  findById(id) {
    return this.httpClient.get<Article>(environment.apiUrl + 'article/' + id);
  }
  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + 'article/' + id);
  }
}
