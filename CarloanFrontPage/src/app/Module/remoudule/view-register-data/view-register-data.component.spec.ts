import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterDataComponent } from './view-register-data.component';

describe('ViewRegisterDataComponent', () => {
  let component: ViewRegisterDataComponent;
  let fixture: ComponentFixture<ViewRegisterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
