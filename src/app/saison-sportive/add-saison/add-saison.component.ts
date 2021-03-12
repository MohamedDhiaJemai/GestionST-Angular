import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';

@Component({
  selector: 'app-add-saison',
  templateUrl: './add-saison.component.html',
  styleUrls: ['./add-saison.component.css']
})
export class AddSaisonComponent implements OnInit {
  saison: SaisonSportive = new SaisonSportive();
  ds: Date;
  fs: Date;
  constructor(private saisonSportiveService: SaisonSportiveService, private router: Router, private datePipe: DatePipe) { }
  ngOnInit(): void {
  }
  onAddSaison() {
    this.saison.dateDebut = this.datePipe.transform(this.ds, 'yyyy-MM-dd');
    this.saison.dateFin = this.datePipe.transform(this.fs, 'yyyy-MM-dd');
    this.saisonSportiveService.add(this.saison).subscribe(
      data => this.router.navigate(['saisons'])
    );
  }

}
