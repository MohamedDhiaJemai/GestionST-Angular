import { Component, OnInit, ViewChild } from '@angular/core';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css']
})
export class BorneComponent implements OnInit {

  bornes: Borne[];

  selectedBorne: Borne;

  @ViewChild('dt') table: Table;

  
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private borneService: BorneService) { }

  ngOnInit() {
    this.borneService.getAllBorne().subscribe(
      data => {
        this.bornes = data;
      }
    );
  }

  onActivationBorne(e) {

    console.log(e.checked)

  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
