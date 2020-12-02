import { Component, OnInit } from '@angular/core';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css']
})
export class BorneComponent implements OnInit {

  bornes: Borne[];

  constructor(private borneService: BorneService) { }

  ngOnInit() {
    this.borneService.getAllBorne().subscribe(
      data => {
        this.bornes = data;
      }
    );
  }

}
