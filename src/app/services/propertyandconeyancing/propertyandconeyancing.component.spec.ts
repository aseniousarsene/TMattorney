import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyandconeyancingComponent } from './propertyandconeyancing.component';

describe('PropertyandconeyancingComponent', () => {
  let component: PropertyandconeyancingComponent;
  let fixture: ComponentFixture<PropertyandconeyancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyandconeyancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyandconeyancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
