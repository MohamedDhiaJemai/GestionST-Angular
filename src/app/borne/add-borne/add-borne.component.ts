import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';

@Component({
  selector: 'app-add-borne',
  templateUrl: './add-borne.component.html',
  styleUrls: ['./add-borne.component.css']
})
export class AddBorneComponent implements OnInit {

  borne: Borne = new Borne();

  constructor(private borneService: BorneService, private router: Router) { }

  ngOnInit() {
  }

  onAddBorne() {
    this.borneService.addBorne(this.borne).subscribe(
      data => {
        this.router.navigate(['bornes'])
      }
    );
  }

}
