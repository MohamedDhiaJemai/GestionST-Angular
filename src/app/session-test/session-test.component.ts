import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionTest } from 'app/model/SessionTest.model';
import { SessionTestService } from 'app/services/session-test/session-test.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-session-test',
  templateUrl: './session-test.component.html',
  styleUrls: ['./session-test.component.css']
})
export class SessionTestComponent implements OnInit {

  sessions: SessionTest[];
  selectedSession: SessionTest;
  edition: boolean;
  consultation: boolean;

  @ViewChild('dt') table: Table;
  constructor(private sessionTestService: SessionTestService, private router: Router) { }

  ngOnInit(): void {
    this.checkAutorisations();

    this.sessionTestService.getAll().subscribe(
      data => {
        this.sessions = data;
        console.log(this.sessions);
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
        if (element.metier === 'sessions-test') {
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
