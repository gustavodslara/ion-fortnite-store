import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  @Input() deviceLanguage: string = `en`;

  constructor(private fortniteApi: FortniteApiIoService) {}

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();
      this.hours = 24 - utcHours - 1;
      this.minutes = 60 - utcMinutes;
      this.seconds = 60 - utcSeconds;

      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        this.fortniteApi.loadingBoolean = true;
        this.fortniteApi.storeUpdate = true;
        setTimeout(() => {
          this.fortniteApi
            .getDailyStore(this.deviceLanguage)
            .subscribe((data: any) => {
              this.fortniteApi.storeData = data.shop;
              this.fortniteApi.loadingBoolean = false;
              this.fortniteApi.storeUpdate = false;
            });
        }, 15000);
      }
    }, 1000);
  }
}
