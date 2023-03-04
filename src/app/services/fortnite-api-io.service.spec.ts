import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FortniteApiIoService } from './fortnite-api-io.service';
import { environment } from './../../environments/environment';

describe('FortniteApiIoService', () => {
  let service: FortniteApiIoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FortniteApiIoService]
    });
    service = TestBed.inject(FortniteApiIoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDailyStore', () => {
    it('should return data from the API', () => {
      const testData = { items: [{ name: 'Item 1' }, { name: 'Item 2' }] };

      service.getDailyStore().subscribe(data => {
        expect(data).toEqual(testData);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}`);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Authorization')).toBe(environment.apiKey);
      req.flush(testData);
    });
  });
});
