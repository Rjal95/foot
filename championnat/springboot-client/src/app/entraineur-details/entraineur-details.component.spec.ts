import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraineurDetailsComponent } from './entraineur-details.component';

describe('EntraineurDetailsComponent', () => {
  let component: EntraineurDetailsComponent;
  let fixture: ComponentFixture<EntraineurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntraineurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraineurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
