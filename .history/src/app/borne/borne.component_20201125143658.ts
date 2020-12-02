import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css'],
  providers: [MessageService]
})
export class BorneComponent implements OnInit {

  bornes: Borne[];
  selectedBorne: Borne;
  borneSubscription: Subscription;
  borne: Borne = new Borne();
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

  onActivationBorne(id, templateAnnulation: TemplateRef<any>) {

    this.borneService.findById(id).subscribe(
      data => {
        console.log('aaa', data.maintenance);
        this.borne = data;
        
        this.borneSubscription = this.borneService.updateBorne(data.id, data).subscribe(
          data => {
            
          }
        );
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
        }
      }
    );
    this.router.navigate(['/bornes']);
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
  }

}
