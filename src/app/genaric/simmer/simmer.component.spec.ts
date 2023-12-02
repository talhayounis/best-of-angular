import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimmerComponent } from './simmer.component';

describe('SimmerComponent', () => {
  let component: SimmerComponent;
  let fixture: ComponentFixture<SimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimmerComponent]
    });
    fixture = TestBed.createComponent(SimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
