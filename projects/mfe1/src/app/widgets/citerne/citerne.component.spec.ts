import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiterneComponent } from './citerne.component';

describe('CiterneComponent', () => {
  let component: CiterneComponent;
  let fixture: ComponentFixture<CiterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
