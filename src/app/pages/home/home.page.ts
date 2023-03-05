import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/public_api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dailyStore: any;

  mobileScreen: boolean = false;
  isLoading: boolean = true;
  deviceLanguage: string;

  constructor(
    private fortniteApi: FortniteApiIoService,
  ) {
    this.deviceLanguage = navigator.language;
  }

  ngOnInit() {
    this.mobileScreen = window.innerWidth < 768;
    this.fortniteApi
      .getDailyStore(this.deviceLanguage)
      .subscribe((data: any) => {
        this.dailyStore = data.shop;
        this.isLoading = false;
      });
  }
}
