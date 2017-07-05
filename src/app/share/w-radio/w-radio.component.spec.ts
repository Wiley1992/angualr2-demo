import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRadioComponent } from './w-radio.component';

describe('WRadioComponent', () => {
  let component: WRadioComponent;
  let fixture: ComponentFixture<WRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
