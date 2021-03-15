import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    private jwtToken = null;
    jwtHelper: JwtHelperService = new JwtHelperService();

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
