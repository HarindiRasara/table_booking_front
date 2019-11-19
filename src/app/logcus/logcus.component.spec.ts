import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcusComponent } from './logcus.component';

describe('LogcusComponent', () => {
  let component: LogcusComponent;
  let fixture: ComponentFixture<LogcusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogcusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
