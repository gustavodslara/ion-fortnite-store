import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.github.gustavodslara.ionfortnitestore',
  appName: 'Ion Fortnite Store',
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
