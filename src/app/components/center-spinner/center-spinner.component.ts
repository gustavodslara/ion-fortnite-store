import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-spinner',
  template: `
    <div class="center-spinner">
      <div class="column">
        <ion-spinner></ion-spinner>
        <p *ngIf="fortniteApi.storeUpdate">
          {{
            'A loja está sendo atualizada, isso pode demorar um pouco...'
              | googleTranslate : deviceLanguage
              | async
          }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./center-spinner.component.scss'],
})
export class CenterSpinnerComponent {
  @Input() deviceLanguage: string = 'en';

  constructor(public fortniteApi: FortniteApiIoService) {}
}
