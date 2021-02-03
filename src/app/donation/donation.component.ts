import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'app/model/Donation.model';
import { DonationService } from 'app/services/donation/donation.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donations: Donation[];
  selectedDonation: Donation;
  edition: boolean;
  consultation: boolean;

  @ViewChild('dt') table: Table;
  constructor(private donationService: DonationService, private router: Router) { }

  ngOnInit(): void {
    this.checkAutorisations();

    this.donationService.getAll().subscribe(
      data => {
        this.donations = data;
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'donations') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }

}
