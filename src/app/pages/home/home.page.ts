import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mobileScreen: boolean = false;
  deviceLanguage: string;

  constructor(public fortniteApi: FortniteApiIoService) {
    this.mobileScreen = window.innerWidth < 768;
    this.deviceLanguage = navigator.language;
    this.fortniteApi
      .getDailyStore(this.deviceLanguage)
      .subscribe((data: any) => {
        console.log(data);
        this.fortniteApi.storeData = data.shop;
        this.fortniteApi.loadingBoolean = false;
      });
  }

}
