import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompeDialogComponent } from './pompe-dialog.component';

describe('PompeDialogComponent', () => {
  let component: PompeDialogComponent;
  let fixture: ComponentFixture<PompeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
