import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fullscreen-card',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button class="rounded-border" (click)="dismiss()">{{
            'Fechar' | googleTranslate : deviceLanguage | async
          }}</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="fullscreen-card" [style.background]="rarityColor">
        <img [src]="imageUrl" [alt]="name" />
        <div class="card-content">
          <h2>{{ name }}</h2>
          <p>{{ description }}</p>
          <p class="price">
            <span> {{ price }}</span>
            <img src="assets/images/vbucks-icon.png" />
          </p>
        </div>
      </div>
    </ion-content>
  `,
  styleUrls: ['./fullscreen-store-item.component.scss'],
})
export class FullscreenStoreItemComponent {
  @Input()
  imageUrl!: string;
  @Input()
  name!: string;
  @Input()
  description!: string;
  @Input()
  price!: number;
  @Input()
  rarity!: string;

  deviceLanguage: string;

  constructor(private modalController: ModalController) {
    this.deviceLanguage = navigator.language;
  }

  get rarityColor() {
    switch (this.rarity) {
      case 'Common':
        return 'radial-gradient(ellipse at top, #BDBDBD 40%, #000000)';
      case 'Uncommon':
        return 'radial-gradient(ellipse at top, #5A7F5A 40%, #000000)';
      case 'Rare':
        return 'radial-gradient(ellipse at top, #2C5E8C 40%, #000000)';
      case 'Epic':
        return 'radial-gradient(ellipse at top, #6E1CC6 40%, #000000)';
      case 'Legendary':
        return 'radial-gradient(ellipse at top, #D69C00 40%, #000000)';
      default:
        return 'radial-gradient(ellipse at top, #BDBDBD 40%, #000000)';
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
