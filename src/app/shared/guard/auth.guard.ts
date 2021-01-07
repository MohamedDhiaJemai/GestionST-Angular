import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    private jwtToken = null;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private router: Router) { }

    canActivate() {
        this.jwtToken = localStorage.getItem('token');
        if (this.jwtToken != null) {
            if (!this.jwtHelper.isTokenExpired(this.jwtToken)) {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
