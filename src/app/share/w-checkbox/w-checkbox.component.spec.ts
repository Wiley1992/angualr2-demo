import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCheckboxComponent } from './w-checkbox.component';

describe('WCheckboxComponent', () => {
  let component: WCheckboxComponent;
  let fixture: ComponentFixture<WCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
