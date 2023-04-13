import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDefaulterComponent } from './view-defaulter.component';

describe('ViewDefaulterComponent', () => {
  let component: ViewDefaulterComponent;
  let fixture: ComponentFixture<ViewDefaulterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDefaulterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDefaulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
