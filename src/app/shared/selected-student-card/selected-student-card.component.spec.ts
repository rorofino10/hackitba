import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStudentCardComponent } from './selected-student-card.component';

describe('SelectedStudentCardComponent', () => {
  let component: SelectedStudentCardComponent;
  let fixture: ComponentFixture<SelectedStudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedStudentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
