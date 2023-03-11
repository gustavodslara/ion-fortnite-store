import { Component } from '@angular/core';

import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.setNotification();
  }

  private setNotification(): void {
    LocalNotifications.requestPermissions();

    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const midnightUTC = new Date(
      Date.UTC(
        tomorrow.getFullYear(),
        tomorrow.getMonth(),
        tomorrow.getDate(),
        0,
        0,
        0
      )
    );

    LocalNotifications.schedule({
      notifications: [
        {
          title: 'Novos Itens na Loja!',
          body: 'A loja foi atualizada, entre para conferir o que há de novo!',
          id: 1,
          sound: 'assets/fortnite-death.wav',
          schedule: {
            every: 'day',
            repeats: true,
            at: midnightUTC,
          },
        },
      ],
    });
  }
}
