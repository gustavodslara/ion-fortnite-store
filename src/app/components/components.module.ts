import { IonicModule } from '@ionic/angular';
import { CenterSpinnerComponent } from './center-spinner/center-spinner.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CountdownTimerComponent, CenterSpinnerComponent],
  imports: [CommonModule, IonicModule],
  exports: [CountdownTimerComponent, CenterSpinnerComponent],
})
export class ComponentsModule {}
