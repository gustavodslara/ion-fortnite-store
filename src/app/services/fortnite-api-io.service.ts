import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FortniteApiIoService {
  private apiUrl = environment.fortniteApiUrl;
  private apiKey = environment.fortniteApiKey; // Replace with your Fortnite API key

  constructor(private http: HttpClient) {}

  getDailyStore(deviceLanguage: string) {
    const headers = { Authorization: this.apiKey };
    return this.http.get(this.apiUrl + deviceLanguage, { headers });
  }
}
