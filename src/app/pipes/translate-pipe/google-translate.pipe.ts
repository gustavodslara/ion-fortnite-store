import { environment } from './../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Pipe({
  name: 'googleTranslate',
  pure: true,
})
export class GoogleTranslatePipe implements PipeTransform {
  private sourceLanguage: string = 'pt-BR'; // source language code

  constructor(private http: HttpClient) {}

  transform(value: string, target: string): Promise<string> {
    if (target === this.sourceLanguage) {
      return Promise.resolve(value);
    }

    const url =
      environment.googleApiUrl +
      environment.googleApiKey +
      `&q=${encodeURIComponent(value)}&source=${
        this.sourceLanguage
      }&target=${target}`;

    return this.http
      .get(url)
      .toPromise()
      .then((response: any) => {
        console.log(response);

        return response.data.translations[0].translatedText;
      });
  }
}
