import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulter-borne',
  templateUrl: './consulter-borne.component.html',
  styleUrls: ['./consulter-borne.component.css']
})
export class ConsulterBorneComponent implements OnInit {

  borne: Borne;

  constructor(private router: ActivatedRoute, private borneService: BorneService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.borneService.findById(id).subscribe(
      data => {
        this.article = data;
        console.log(this.article)
      }
    );
  }

}
