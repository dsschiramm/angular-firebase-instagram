import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService],
})
export class LoginComponent implements OnInit {
	@Output() public flRegister: EventEmitter<boolean> = new EventEmitter<boolean>();

	public formgroup: FormGroup = new FormGroup({
		email: new FormControl(),
		password: new FormControl(),
	});

	public flAcessoNegado: boolean = false;

	constructor(private authService: AuthService, private route: ActivatedRoute) {}

	ngOnInit() {
		//maybe make an alert
		this.route.queryParams.subscribe((params) => {
			this.flAcessoNegado = params['flAcessoNegado'];
		});
	}

	public cadastrar(): void {
		this.flRegister.emit(true);
	}

	public signIn(): void {
		this.authService.signIn(this.formgroup.value.email, this.formgroup.value.password);
	}
}
