import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryPageComponent } from './enquiry-page.component';

describe('EnquiryPageComponent', () => {
  let component: EnquiryPageComponent;
  let fixture: ComponentFixture<EnquiryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
