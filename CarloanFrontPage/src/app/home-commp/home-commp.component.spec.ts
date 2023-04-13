import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommpComponent } from './home-commp.component';

describe('HomeCommpComponent', () => {
  let component: HomeCommpComponent;
  let fixture: ComponentFixture<HomeCommpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCommpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCommpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
