import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from './../../shared/data-storage.service';
import { AuthService } from './../../auth/auth.service';

@Component({
	templateUrl: './header.component.html',
	selector: 'app-header'
})
export class HeaderComponent {
	constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

	onSaveData() {
		this.dataStorageService.storeRecipes().subscribe((response: Response) => {
			console.log(response);
		});
	}

	onFetchData() {
		this.dataStorageService.getRecipes();
	}

	onLogout() {
		console.log('logout');
		this.authService.logout();
	}
}
