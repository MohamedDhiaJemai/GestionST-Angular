import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css'],
  providers: [MessageService]
})
export class BorneComponent implements OnInit {

  bornes: Borne[];

  selectedBorne: Borne;

  @ViewChild('dt') table: Table;


  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private borneService: BorneService, private messageService: MessageService,
    private modalService: BsModalService, private router: Router) { }

  ngOnInit() {
    this.borneService.getAllBorne().subscribe(
      data => {
        this.bornes = data;
      }
    );
  }

  onActivationBorne(id) {

    this.borneService.findById(id).subscribe(
      data => {
        console.log('aaa', data);
      }
    );
    this.router.navigateByUrl('/bornes');
  }

  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
  }

}
