import { GoogleTranslatePipe } from './google-translate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GoogleTranslatePipe],
  imports: [CommonModule],
  providers: [],
  exports: [GoogleTranslatePipe],
})
export class GoogleTranslatePipeModule {}
