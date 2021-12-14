import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtcollectionComponent } from './debtcollection.component';

describe('DebtcollectionComponent', () => {
  let component: DebtcollectionComponent;
  let fixture: ComponentFixture<DebtcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
