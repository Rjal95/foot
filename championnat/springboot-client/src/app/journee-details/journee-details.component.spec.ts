import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneeDetailsComponent } from './journee-details.component';

describe('JourneeDetailsComponent', () => {
  let component: JourneeDetailsComponent;
  let fixture: ComponentFixture<JourneeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
