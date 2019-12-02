import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppQuattroComponent } from './app-quattro.component';

describe('AppQuattroComponent', () => {
  let component: AppQuattroComponent;
  let fixture: ComponentFixture<AppQuattroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppQuattroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppQuattroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
