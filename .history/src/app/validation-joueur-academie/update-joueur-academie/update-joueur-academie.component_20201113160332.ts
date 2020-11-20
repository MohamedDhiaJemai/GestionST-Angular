import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-joueur-academie',
  templateUrl: './update-joueur-academie.component.html',
  styleUrls: ['./update-joueur-academie.component.css']
})
export class UpdateJoueurAcademieComponent implements OnInit {

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];
  itemsParents: SelectItem[];
  item: string;
  date: Date;
  joueurAcademieSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private joueurAcademieService: JoueurAcademieService,
    private parentService: ParentService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {

    const id = this.router.snapshot.params['id'];

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
