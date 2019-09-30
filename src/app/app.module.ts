import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';
import { BannerComponent } from './components/access/banner/banner.component';
import { RegisterComponent } from './components/access/register/register.component';
import { LoginComponent } from './components/access/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PublicationComponent } from './components/home/publication/publication.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
	declarations: [
		AppComponent,
		AccessComponent,
		BannerComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		PublicationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig, 'dss-projects'),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
