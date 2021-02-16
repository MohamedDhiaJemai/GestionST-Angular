import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'app/model/Article.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllArticle(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'article/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addArticle(article: Article): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'article/add', article,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateArticle(id: number, article: Article) {
    return this.httpClient.put(environment.apiUrl + 'article/update/' + id, article,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Article>(environment.apiUrl + 'article/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
