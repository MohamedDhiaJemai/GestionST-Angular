import { Component, OnInit } from '@angular/core';
import { Produit } from 'app/model/produit.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  products: Produit[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  constructor() { }

  ngOnInit(): void {
    
    

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];
  }

}
