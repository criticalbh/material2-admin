import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardDialogComponent } from './standard-dialog.component';

describe('StandardDialogComponent', () => {
  let component: StandardDialogComponent;
  let fixture: ComponentFixture<StandardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
