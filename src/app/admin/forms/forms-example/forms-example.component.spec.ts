import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExampleComponent } from './forms-example.component';

describe('FormsExampleComponent', () => {
  let component: FormsExampleComponent;
  let fixture: ComponentFixture<FormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
