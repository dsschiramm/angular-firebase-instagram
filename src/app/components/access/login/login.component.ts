import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService]
})
export class LoginComponent implements OnInit {

	@Output() public flRegister: EventEmitter<boolean> = new EventEmitter<boolean>();

	public formgroup: FormGroup = new FormGroup({
		'email': new FormControl(),
		'password': new FormControl()
	});

	constructor(private authService: AuthService) { }
	
	ngOnInit() {
	}

	public cadastrar (): void {
		this.flRegister.emit(true);
	}

	public signIn(): void {
		this.authService.signIn(this.formgroup.value.email, this.formgroup.value.password);
	}
}
