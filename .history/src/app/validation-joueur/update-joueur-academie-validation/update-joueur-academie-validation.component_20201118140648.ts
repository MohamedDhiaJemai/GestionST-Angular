import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsJoueur } from 'app/model/DocumentsJoueur.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-academie-validation',
  templateUrl: './update-joueur-academie-validation.component.html',
  styleUrls: ['./update-joueur-academie-validation.component.scss'],
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

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  id: number;

  inputValue: string;
  inputValueImage: string;

  uploadedFiles: File[] = [];
  uploadedFilesMessage: File[] = [];
  formData: FormData;
  formDatas: FormData[] = [];
  clicked = true;

  myfile: any[] = [];

  dateSytem: Date = new Date();

  constructor(private joueurAcademieService: JoueurAcademieService,
    private parentService: ParentService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService,
    private docuementsJoueurService: DocumentsJoueurService,
    private messageService: MessageService,
    private http: HttpClient) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);

    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
      }
    );
    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.date = new Date(this.joueurAcademie.dateNaissance);
        console.log(this.joueurAcademie)
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  // upload() {
  //   this.progress = 0;
  //   this.currentFile = this.selectedFiles.item(0);

  //   const formData: FormData = new FormData();
  //   formData.append('file', this.currentFile);
  //   this.docuementsJoueurService.upload(this.currentFile, this.id).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });

  //   this.selectedFiles = undefined;
  // }

  upload(event) {
    this.showViaServiceWait();
    this.clicked = false;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.uploadedFilesMessage.push(file);
      let formData = new FormData();
      formData.append('file', file);
      this.docuementsJoueurService.upload(formData, this.id).subscribe(
        resp => {
          this.showViaServiceOk(resp.message);
          this.clicked = true;
          this.inputValue = resp.message;
        },
        err => {
          this.showViaServiceEror(err.error.message);
          this.clicked = true;
          this.uploadedFiles.pop()
          this.uploadedFilesMessage.pop();
        },
      );
    }
    console.log('my file ', this.myfile)
    this.myfile = [];
  }
  ngOnUpdateJoueurAcademie(templateAnnulation: TemplateRef<any>) {

    this.joueurAcademie.dateValidation = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    // this.datePipe.transform(this.dateSytem, 'yyyy-MM-dd HH:mm');
    this.joueurAcademie.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    console.log(this.joueurAcademie.validation);
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

  showViaServiceWait() {
    this.messageService.clear();
    this.messageService.add({ severity: 'warn', summary: 'Info Message', detail: ' Upload de fichier en cours' });
  }

  showViaServiceOk(resp: string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: resp });
  }

  showViaServiceEror(resp: string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: 'Error', detail: resp });
  }

}
