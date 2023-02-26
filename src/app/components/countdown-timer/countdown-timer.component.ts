import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();
      this.hours = 24 - utcHours - 1;
      this.minutes = 60 - utcMinutes;
      this.seconds = 60 - utcSeconds;
    }, 1000);
  }
}
