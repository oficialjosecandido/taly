import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlanComponent } from './payment-plan.component';

describe('PaymentPlanComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
