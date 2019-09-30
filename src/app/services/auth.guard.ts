import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

		return this.authService.user.pipe(
			take(1),
			map(user => !!user), // map to boolean
			tap(loggedIn => {
				if (!loggedIn) {
					console.log('access denied');
					this.router.navigate(['login']);
				} else {
					console.log('loggedIn');
				}
			})
		);
	}
}
