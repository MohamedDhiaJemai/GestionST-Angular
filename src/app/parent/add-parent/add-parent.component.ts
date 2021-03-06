import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parent } from 'app/model/Parent.model';
import { ParentService } from 'app/services/parent/parent.service';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {

  parent: Parent = new Parent();

  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit() {
  }

  onAddParent() {
    this.parentService.addParent(this.parent).subscribe(
      data => {
        this.router.navigate(['add-joueur-academie'])
      }
    );
  }

}
