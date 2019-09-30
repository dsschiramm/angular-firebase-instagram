import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Image } from "./image.model";

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css'],
	animations: [
		trigger('banner', [
			state('hidden', style({
				'opacity': 0
			})),
			state('visible', style({
				'opacity': 1
			})),
			transition('hidden <=> visible', animate('2s ease-in'))
		])
	]
})
export class BannerComponent implements OnInit {

	public imageList: Image[] = [
		{ state: 'visible', url: '/assets/banner-acesso/img_1.png' },
		{ state: 'hidden', url: '/assets/banner-acesso/img_2.png' },
		{ state: 'hidden', url: '/assets/banner-acesso/img_3.png' },
		{ state: 'hidden', url: '/assets/banner-acesso/img_4.png' },
		{ state: 'hidden', url: '/assets/banner-acesso/img_5.png' }
	];

	constructor() { }
	
	ngOnInit() {
		setTimeout(() => this.rotation(), 3000);
	}

	private rotation(): void {

		for (let i: number = 0; i < this.imageList.length; i++) {

			if (this.imageList[i].state === 'visible') {
				this.imageList[i].state = 'hidden';
				this.imageList[i === 4 ? 0 : (i + 1)].state = 'visible';
				break;
			}
		}

		setTimeout(() => this.rotation(), 3000);
	}
}
