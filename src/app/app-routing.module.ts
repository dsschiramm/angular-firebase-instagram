import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from "./components/access/access.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
	{ path: '', component: AccessComponent },
	{ path: 'login', component: AccessComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
