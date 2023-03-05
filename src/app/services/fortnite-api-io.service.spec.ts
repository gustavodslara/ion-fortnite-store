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
      providers: [FortniteApiIoService],
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

  it('should get daily store data', () => {
    const deviceLanguage = 'en';
    const testData = { items: [] };
    const expectedUrl = environment.fortniteApiUrl + deviceLanguage;

    service.getDailyStore(deviceLanguage).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.has('Authorization')).toBeTruthy();
    expect(req.request.headers.get('Authorization')).toEqual(environment.fortniteApiKey);
    req.flush(testData);
  });
});
