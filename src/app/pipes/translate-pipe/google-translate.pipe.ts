import { environment } from './../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HTTP } from '@ionic-native/http/ngx';

@Pipe({
  name: 'googleTranslate',
  pure: false, // set to false to update the translation when the language changes
})
export class GoogleTranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HTTP) {}

  async transform(value: string): Promise<string> {
    const apiUrl = environment.googleApiUrl;
    const apiKey = environment.googleApiKey;
    const deviceLang = navigator.language;
    const targetLang = this.translate.currentLang || deviceLang;

    const url = `${apiUrl}?key=${apiKey}&target=${targetLang}&q=${encodeURIComponent(
      value
    )}`;

    return this.http
      .get(url, {}, {})
      .then((response) => {
        const translation = JSON.parse(response.data).data.translations[0]
          .translatedText;
        return translation;
      })
      .catch((error) => {
        console.error('Error translating:', error);
        return value;
      });
  }

  getDeviceLang(ip: string): string {
    // Use the IP address to get the user's country code
    const countryCode = ip.slice(0, 2).toLowerCase();

    // Map the country code to a language code
    const langCode = {
      en: 'en',
      fr: 'fr',
      es: 'es',
      de: 'de',
      pt: 'pt',
      it: 'it',
      // Add more languages as needed
    }[countryCode];

    return langCode || 'en'; // Default to English if the country code is not supported
  }
}
