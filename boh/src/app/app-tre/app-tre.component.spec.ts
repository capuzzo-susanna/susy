import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTreComponent } from './app-tre.component';

describe('AppTreComponent', () => {
  let component: AppTreComponent;
  let fixture: ComponentFixture<AppTreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
