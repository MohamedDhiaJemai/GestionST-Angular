import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-service',
  templateUrl: './consulter-service.component.html',
  styleUrls: ['./consulter-service.component.css']
})
export class ConsulterServiceComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  constructor() { }

  ngOnInit(): void {
  }

}
