import { Component, OnInit } from '@angular/core';
import { Produit } from 'app/model/produit.model';
import { ProduitService } from 'app/services/produit/produit.service';
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

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

    this.produitService.getAllProduit().subscribe(
      data => {
        this.products = data;
        console.log(this.products)
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
