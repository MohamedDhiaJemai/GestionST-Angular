import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-academie-validation',
  templateUrl: './update-joueur-academie-validation.component.html',
  styleUrls: ['./update-joueur-academie-validation.component.css'],
  providers: [MessageService]
})
export class UpdateJoueurAcademieValidationComponent implements OnInit {

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];
  itemsParents: SelectItem[];
  item: string;
  date: Date;
  joueurAcademieSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  uploadedFiles: any[] = [];
  formData: FormData;
  formDatas: FormData[] = [];
  clicked = true;


  constructor(private joueurAcademieService: JoueurAcademieService,
    private parentService: ParentService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService,
    private docuementsJoueurService: DocumentsJoueurService,
    private messageService: MessageService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {

    const id = this.router.snapshot.params['id'];

    this.docuementsJoueurService.getListFiles(id).subscribe(
      data => {
        console.log(data);
      }
    );

    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
      }
    );

    this.joueurAcademieService.findById(id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.date = new Date(this.joueurAcademie.dateNaissance);
        console.log(this.joueurAcademie)
      }
    );
  }

  myUploaderDocument() {
    this.showViaServiceWait("personnel");
    this.clicked = false;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      let formData = new FormData();
      formData.append("file", file);
      this.fileService.insertPersonnel(formData).subscribe(
        resp => {
          console.log(resp);
          this.showViaServiceOk(resp, "personnel");
          this.clicked = true;
        },
        err => {
          console.log(err)
          this.showViaServiceEror("personnel");
          this.clicked = true;
        }
      );
    }
  }
  showViaServiceWait() {
      this.messageService.clear();
      this.messageService.add({ key: 'personnel', severity: 'warn', summary: 'Info Message', detail: ' Upload de fichier en cours' });
  }

  showViaServiceOk() {
      this.messageService.clear();
      this.messageService.add({ key: 'personnel', severity: 'success', summary: 'Success', detail: 'Message Content : nombre de lignes insérées ' + data });
  }

  showViaServiceEror(key: string) {
    if (key == "personnel") {
      this.messageService.clear();
      this.messageService.add({ key: 'personnel', severity: 'error', summary: 'Error', detail: 'Message Content : Problème d\'insérision' });
    }

  }

  ngOnUpdateJoueurAcademie(templateAnnulation: TemplateRef<any>) {
    this.joueurAcademie.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurAcademieSubscription = this.joueurAcademieService.updatejAcademie(this.joueurAcademie.id, this.joueurAcademie).subscribe(
      data => {
        this.routerNav.navigate(['/consulter-joueur-academie/' + this.joueurAcademie.id]);
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
