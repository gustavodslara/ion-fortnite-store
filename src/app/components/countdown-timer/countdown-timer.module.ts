import { CountdownTimerComponent } from './countdown-timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CountdownTimerComponent],
  imports: [CommonModule, IonicModule],
  exports: [CountdownTimerComponent],
})
export class CountdownTimerModule {}
