import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { GoogleTranslatePipe } from './google-translate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GoogleTranslatePipe],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService, HTTP],
  exports: [GoogleTranslatePipe],
})
export class GoogleTranslateModule {}
