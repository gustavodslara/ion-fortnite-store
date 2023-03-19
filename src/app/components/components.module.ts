import { FullscreenStoreItemComponent } from './fullscreen-store-item/fullscreen-store-item.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { GoogleTranslatePipeModule } from './../pipes/translate-pipe/google-translate.pipe.module';
import { IonicModule } from '@ionic/angular';
import { CenterSpinnerComponent } from './center-spinner/center-spinner.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortniteApiIoService } from '../services/fortnite-api-io.service';

@NgModule({
  declarations: [
    CountdownTimerComponent,
    CenterSpinnerComponent,
    StoreItemComponent,
    FullscreenStoreItemComponent,
  ],
  imports: [CommonModule, IonicModule, GoogleTranslatePipeModule],
  providers: [FortniteApiIoService],
  exports: [
    CountdownTimerComponent,
    CenterSpinnerComponent,
    StoreItemComponent,
    FullscreenStoreItemComponent,
  ],
})
export class ComponentsModule {}
