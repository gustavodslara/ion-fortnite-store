import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { FortniteApiIoService } from './../../services/fortnite-api-io.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let fortniteApiIoServiceSpy: jasmine.SpyObj<FortniteApiIoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('FortniteApiIoService', ['getDailyStore']);

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: FortniteApiIoService, useValue: spy }],
    }).compileComponents();

    fortniteApiIoServiceSpy = TestBed.inject(
      FortniteApiIoService
    ) as jasmine.SpyObj<FortniteApiIoService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set mobileScreen to true if window.innerWidth is less than 768', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(767);

    component.ngOnInit();

    expect(component.mobileScreen).toBeTrue();
  });

  it('should set mobileScreen to false if window.innerWidth is greater than or equal to 768', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(768);

    component.ngOnInit();

    expect(component.mobileScreen).toBeFalse();
  });

  it('should get daily store from FortniteApiIoService on ngOnInit', () => {
    const dailyStore = [{ displayName: 'item1' }, { displayName: 'item2' }];
    fortniteApiIoServiceSpy.getDailyStore.and.returnValue(of({ shop: dailyStore }));

    component.ngOnInit();

    expect(component.dailyStore).toEqual(dailyStore);
  });
});
