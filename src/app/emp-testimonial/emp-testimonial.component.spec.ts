import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTestimonialComponent } from './emp-testimonial.component';

describe('EmpTestimonialComponent', () => {
  let component: EmpTestimonialComponent;
  let fixture: ComponentFixture<EmpTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
