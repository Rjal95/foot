import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadeDetailsComponent } from './stade-details.component';

describe('StadeDetailsComponent', () => {
  let component: StadeDetailsComponent;
  let fixture: ComponentFixture<StadeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
