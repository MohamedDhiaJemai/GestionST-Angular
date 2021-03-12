import { Component, OnInit } from '@angular/core';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataview-j-test',
  templateUrl: './dataview-j-test.component.html',
  styleUrls: ['./dataview-j-test.component.scss']
})
export class DataviewJTestComponent implements OnInit {

  joueurs: InscriptionTest[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;
  photoUrl = environment.apiUrl + 'photo-test/get/';
  constructor(private inscriptionTestService: InscriptionTestService) { }

  ngOnInit() {
    this.inscriptionTestService.valide().subscribe(
      data => {
        this.joueurs = data;
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
