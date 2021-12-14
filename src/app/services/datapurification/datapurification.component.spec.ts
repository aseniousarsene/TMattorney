import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapurificationComponent } from './datapurification.component';

describe('DatapurificationComponent', () => {
  let component: DatapurificationComponent;
  let fixture: ComponentFixture<DatapurificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapurificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapurificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
