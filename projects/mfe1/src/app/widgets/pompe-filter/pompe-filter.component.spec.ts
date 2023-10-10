import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompeFilterComponent } from './pompe-filter.component';

describe('PompeFilterComponent', () => {
  let component: PompeFilterComponent;
  let fixture: ComponentFixture<PompeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
