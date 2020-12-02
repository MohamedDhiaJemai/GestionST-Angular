import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css']
})
export class ServiceSTComponent implements OnInit {

  inputValue = 'others';

  typeService: string;

  constructor() { }

  ngOnInit() {
    this.onShowService(this.inputValue);

  }

  onShowService(type: string) {
    this.typeService = type;
    console.log(this.typeService)
    this.inputValue = this.typeService;
  }


}
