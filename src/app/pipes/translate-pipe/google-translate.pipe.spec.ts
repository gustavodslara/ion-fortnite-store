import { GoogleTranslatePipe } from './google-translate.pipe';
import { TranslateService } from '@ngx-translate/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

describe('GoogleTranslatePipe', () => {
  let pipe: GoogleTranslatePipe;
  let translateService: TranslateService;
  let http: HTTP;

  beforeEach(() => {
    translateService = jasmine.createSpyObj('TranslateService', ['get', 'currentLang']);
    http = jasmine.createSpyObj('HTTP', ['get']);

    pipe = new GoogleTranslatePipe(translateService, http);
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should translate the input string', async () => {
    const inputValue = 'Hello world';
    const expectedTranslation = 'Bonjour le monde';

    const apiUrl = 'https://translation.googleapis.com/language/translate/v2';
    const apiKey = 'YOUR_API_KEY';
    const deviceLang = 'en';
    const targetLang = 'fr';

    const expectedUrl = `${apiUrl}?key=${apiKey}&target=${targetLang}&q=${encodeURIComponent(
      inputValue
    )}`;

    const mockHttpResponse: HTTPResponse = {
      data: JSON.stringify({ data: { translations: [{ translatedText: expectedTranslation }] } }),
      status: 0,
      headers: {},
      url: ''
    };
    http.get = jasmine.createSpy().and.returnValue(Promise.resolve(mockHttpResponse));

    translateService.currentLang = targetLang;

    const result = await pipe.transform(inputValue);

    expect(http.get).toHaveBeenCalledWith(expectedUrl, {}, {});
    expect(result).toEqual(expectedTranslation);
  });

  it('should catch and log errors when translation fails', async () => {
    const inputValue = 'Hello world';
    const expectedError = 'An error occurred while translating';

    const mockError = new Error(expectedError);
    http.get = jasmine.createSpy().and.callFake(() => Promise.reject(mockError));

    spyOn(console, 'error');

    const result = await pipe.transform(inputValue);

    expect(http.get).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error translating:', mockError);
    expect(result).toEqual(inputValue);
  });
});
