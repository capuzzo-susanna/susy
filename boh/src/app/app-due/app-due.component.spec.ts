import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDueComponent } from './app-due.component';

describe('AppDueComponent', () => {
  let component: AppDueComponent;
  let fixture: ComponentFixture<AppDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
