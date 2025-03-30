import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsIndicatorComponent } from './points-indicator.component';

describe('PointsIndicatorComponent', () => {
  let component: PointsIndicatorComponent;
  let fixture: ComponentFixture<PointsIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
