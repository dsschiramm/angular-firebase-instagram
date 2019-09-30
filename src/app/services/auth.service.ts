import { User } from "../models/user.model";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	user: Observable<User>;

	constructor(
		private angularFireAuth: AngularFireAuth,
		private angularFirestore: AngularFirestore,
		private angularFireDatabase: AngularFireDatabase,
		private router: Router
	) {

		//// Get auth data, then get firestore user document || null
		this.user = this.angularFireAuth.authState.pipe(
			switchMap(user => {
				if (user) {
					console.log('user');
					return this.angularFireDatabase.object(`users/${user.uid}`).valueChanges();
				} else {
					return of(null);
				}
			})
		)
	}

	public googleLogin () {
		const provider = new auth.GoogleAuthProvider()
		return this.oAuthLogin(provider);
	}

	private oAuthLogin (provider) {
		return this.angularFireAuth.auth.signInWithPopup(provider).then((credential) => {
			this.router.navigate(['home']);
			this.updateUserData(credential.user);
		});
	}

	// Not used
	private updateUserData(user) {
		// Sets user data to firestore on login

		const userReference: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);

		const data: User = {
			uid: user.uid,
			email: user.email,
			fullname: user.fullname,
			username: user.username
		}

		return userReference.set(data, { merge: true })
	}

	signOut() {
		this.angularFireAuth.auth.signOut().then(() => {
			this.router.navigate(['/']);
		});
	}

	//////

	public signIn (email: string, password: string): void {

		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((response: any) => {

			console.log(response);
			this.router.navigate(['/home']);
		}).catch((error: any) => {

			console.log(error);
			alert('The login or password is wrong.');
		});
	}

	public update(fbPath: string, data: any) {
		return this.angularFireDatabase.object(fbPath).update(data);
	}

	public addUser (user: User): void {
		console.log(user);

		this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((response: any) => {

			console.log(response);

			if (response.additionalUserInfo.isNewUser) {
				delete user.password;

				return this.angularFireDatabase.object(`users/${response.user.uid}`).set(user);
			}
		}).catch((error: any) => {

			console.log(error);

			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
				alert('The password is too weak.');
			} else {
				alert(errorMessage);
			}
		});
	}
}