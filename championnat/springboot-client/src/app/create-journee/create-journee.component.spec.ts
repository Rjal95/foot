import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJourneeComponent } from './create-journee.component';

describe('CreateJourneeComponent', () => {
  let component: CreateJourneeComponent;
  let fixture: ComponentFixture<CreateJourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJourneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
