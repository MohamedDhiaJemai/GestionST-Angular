import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnChanges {

  @Input() someInput: string;

  constructor() { }


  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
