import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSetteledComponent } from './loan-setteled.component';

describe('LoanSetteledComponent', () => {
  let component: LoanSetteledComponent;
  let fixture: ComponentFixture<LoanSetteledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSetteledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSetteledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
