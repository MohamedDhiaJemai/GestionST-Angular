import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css']
})
export class ServiceSTComponent implements OnInit {

  typeService: string;
  
  constructor() { }

  ngOnInit() {

  }

  onShowService(type: string) {
    console.log(type)
  }


}
