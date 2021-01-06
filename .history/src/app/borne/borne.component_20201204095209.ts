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

  displayMaximizable: boolean;
  displayBasic: boolean;
  displayBasicRouleur: boolean;
  displayBasicInformation: boolean;
  displayBasicFTP: boolean;

  url;
  format;

  testUrl = 'http://192.168.0.143:8443/screensaver/';

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
        this.borne = data;
        this.borne.maintenance = !data.maintenance;
        this.borneSubscription = this.borneService.updateBorne(this.borne.id, this.borne).subscribe(
          data2 => {
            console.log(data2);
            this.router.navigate(['/bornes']);
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
    this.modalRef.hide();
  }


  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showBasicDialogRouleur() {
    this.displayBasicRouleur = true;
  }
  showDialogFTP() {
    this.displayBasicFTP = true;
  }
  showDialogInformation() {
    this.displayBasicInformation = true;
  }


  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  onGetScreensaver(id: number) {
    this.testUrl = this.testUrl + id;
    console.log(this.testUrl)
    // const file = event.target.files && event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   if (file.type.indexOf('image') > -1) {
    //     this.format = 'image';
    //   } else if (file.type.indexOf('video') > -1) {
    //     this.format = 'video';
    //   }
    //   reader.onload = (event) => {
    //     this.url = (<FileReader>event.target).result;
    //   }
    // }
  }


}
