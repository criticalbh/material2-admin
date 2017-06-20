import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponentComponent } from './outlet-component.component';

describe('OutletComponentComponent', () => {
  let component: OutletComponentComponent;
  let fixture: ComponentFixture<OutletComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
