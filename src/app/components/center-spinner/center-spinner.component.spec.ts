import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CenterSpinnerComponent } from './center-spinner.component';

describe('CenterSpinnerComponent', () => {
  let component: CenterSpinnerComponent;
  let fixture: ComponentFixture<CenterSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenterSpinnerComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spinner', () => {
    const element = fixture.nativeElement;
    const spinner = element.querySelector('ion-spinner');

    expect(spinner).toBeTruthy();
  });
});
