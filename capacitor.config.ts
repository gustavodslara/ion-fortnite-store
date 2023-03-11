import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ion-fortnite-store',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true,
    backgroundColor: '#00000000',
  },
  ios: {
    backgroundColor: '#00000000',
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'assets/icon/favicon.png',
      iconColor: '#00000000',
      sound: 'assets/fortnite-death.wav',
    },
  },
};

export default config;
