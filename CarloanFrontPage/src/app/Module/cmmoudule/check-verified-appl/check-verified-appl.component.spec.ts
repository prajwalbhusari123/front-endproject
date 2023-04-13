import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVerifiedApplComponent } from './check-verified-appl.component';

describe('CheckVerifiedApplComponent', () => {
  let component: CheckVerifiedApplComponent;
  let fixture: ComponentFixture<CheckVerifiedApplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckVerifiedApplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckVerifiedApplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
