import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompeiconsComponent } from './pompeicons.component';

describe('PompeiconsComponent', () => {
  let component: PompeiconsComponent;
  let fixture: ComponentFixture<PompeiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompeiconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompeiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
