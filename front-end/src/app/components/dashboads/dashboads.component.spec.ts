import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadsComponent } from './dashboads.component';

describe('DashboadsComponent', () => {
  let component: DashboadsComponent;
  let fixture: ComponentFixture<DashboadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
