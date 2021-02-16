import { Component, OnInit, TemplateRef } from '@angular/core';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css']
})
export class ServiceSTComponent implements OnInit {
  inputValue = 'others';
  typeService: string;
  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }

  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('services');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.onShowService(this.inputValue);
  }

  onShowService(type: string) {
    this.typeService = type;
    this.inputValue = this.typeService;
  }


}
