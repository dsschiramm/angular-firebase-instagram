import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
	selector: 'app-access',
	templateUrl: './access.component.html',
	styleUrls: ['./access.component.css'],
	animations: [
		trigger('animation-banner', [
			state('start', style({ 'opacity': 1 })),
			transition('void => start', [
				style({ 'opacity': 0, transform: 'translate(-50px, -50px)' }),
				animate('500ms 500ms ease-in-out')
			])
		]),
		trigger('animation-painel', [
			state('start', style({ 'opacity': 1 })),
			transition('void => start', [
				style({ 'opacity': 0, transform: 'translate(50px, 50px)' }),
				animate('1500ms 500ms ease-in-out', keyframes([
					style({ offset: 0.60, opacity: 1, transform: 'translateX(0)' }),
					style({ offset: 0.82, opacity: 1, transform: 'translateX(0)' }),
					style({ offset: 0.84, opacity: 1, transform: 'translateY(-10px)' }),
					style({ offset: 0.86, opacity: 1, transform: 'translateY(10px)' }),
					style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
					style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),
					style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
					style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
					style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
					style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' }),
					style({ offset: 1, opacity: 1, transform: 'translateY(0)' })
				]))
			])
		])
	]
})
export class AccessComponent implements OnInit {

	public bannerState: string = 'start';

	public flRegister: boolean = false;
	
	constructor() { }

	ngOnInit() {
	}

	public register(event: boolean): void {
		this.flRegister = event;
	}

	public startAnimation(): void {

	}

	public doneAnimation(): void {

	}
}
