import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataviewj-academie',
  templateUrl: './dataviewj-academie.component.html',
  styleUrls: ['./dataviewj-academie.component.scss']
})
export class DataviewjAcademieComponent implements OnInit {

  joueurAcads: JoueurAcamedie[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;
  photoUrl = environment.apiUrl + 'photo/get/';
  constructor(private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.joueurAcademieService.getAlljAcademie().subscribe(
      data => {
        this.joueurAcads = data;
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
