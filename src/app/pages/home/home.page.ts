import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dailyStore: any;
  mobileScreen: boolean = false;

  constructor(private fortniteApi: FortniteApiIoService) {}

  ngOnInit() {
    this.mobileScreen = window.innerWidth < 768;
    this.fortniteApi.getDailyStore().subscribe((data: any) => {
      this.dailyStore = data.shop;
    });
  }

}
