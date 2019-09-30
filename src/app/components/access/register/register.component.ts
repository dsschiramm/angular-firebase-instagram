import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "../../../models/user.model";
import { AuthService } from "../../../services/auth.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [AuthService]
})
export class RegisterComponent implements OnInit {

	@Output() public flRegister: EventEmitter<boolean> = new EventEmitter<boolean>();

	public formgroup: FormGroup = new FormGroup({
		'email': new FormControl(),
		'fullname': new FormControl(),
		'username': new FormControl(),
		'password': new FormControl()
	});

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	public login(): void {
		this.flRegister.emit(false);
	}

	public addUser(): void {

		let user: User = {
			email: this.formgroup.value.email,
			fullname: this.formgroup.value.fullname,
			username: this.formgroup.value.username,
			password: this.formgroup.value.password
		};

		this.authService.addUser(user);
	}
}
