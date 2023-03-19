import { FullscreenStoreItemComponent } from './../fullscreen-store-item/fullscreen-store-item.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fortnite-card',
  template: `
    <div class="card" [style.background]="rarityColor" (click)="expandCard()">
      <img [src]="imageUrl" [alt]="name" />
      <div class="card-content">
        <p>
          <b>{{ name }}</b>
        </p>
        <p class="description">{{ description }}</p>
        <p class="price">
          <span> {{ price }}</span> <img src="assets/images/vbucks-icon.png" />
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent {
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

  constructor(private modalController: ModalController) {}

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

  async expandCard() {
    const modal = await this.modalController.create({
      component: FullscreenStoreItemComponent,
      componentProps: {
        imageUrl: this.imageUrl,
        name: this.name,
        description: this.description,
        price: this.price,
        rarity: this.rarity,
      },
    });

    return await modal.present();
  }
}
