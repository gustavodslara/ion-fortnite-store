import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CountdownTimerComponent } from './countdown-timer.component';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update time every second', fakeAsync(() => {
    const initialHours = component.hours;
    const initialMinutes = component.minutes;
    const initialSeconds = component.seconds;
    tick(1000);
    expect(component.hours).toBe(initialHours - 1);
    expect(component.minutes).toBe(initialMinutes === 0 ? 59 : initialMinutes - 1);
    expect(component.seconds).toBe(initialSeconds === 0 ? 59 : initialSeconds - 1);
  }));
});
