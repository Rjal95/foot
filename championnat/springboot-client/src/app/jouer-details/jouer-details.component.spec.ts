import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JouerDetailsComponent } from './jouer-details.component';

describe('JouerDetailsComponent', () => {
  let component: JouerDetailsComponent;
  let fixture: ComponentFixture<JouerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JouerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JouerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
