import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    const isAuthenticated = localStorage.getItem("token") !== null;
    
    if (!isAuthenticated) {
      
      alert("login olmanız gerekli");
      this.router.navigate(["admin/login"]);
    }

    return isAuthenticated;
  }
  
}