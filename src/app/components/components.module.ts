import { IonicModule } from '@ionic/angular';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CountdownTimerComponent, LoadingSpinnerComponent],
  imports: [CommonModule, IonicModule],
  exports: [CountdownTimerComponent, LoadingSpinnerComponent],
})
export class ComponentsModule {}
