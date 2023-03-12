import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FortniteApiIoService {
  private apiUrl = environment.fortniteApiUrl;
  private apiKey;

  storeData: any;
  loadingBoolean: boolean = true;
  storeUpdate: boolean = false;

  constructor(private http: HttpClient) {
    this.apiKey = environment.fortniteApiKey;
  }

  getDailyStore(deviceLanguage: string) {
    const headers = { Authorization: this.apiKey };
    return this.http.get(this.apiUrl + deviceLanguage, { headers });
  }
}
