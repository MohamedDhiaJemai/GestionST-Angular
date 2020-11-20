import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {
  @Input() someInput: string;

  id: number;
  photoSubscription: Subscription;

  constructor(private photoService: PhotoService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.photoService.getPhoto(this.id).subscribe(
      data => {
        console.log('data', data)
        this.photoSubscription = data;
      }
    );
    console.log('photo', this.photoSubscription)
  }

}
