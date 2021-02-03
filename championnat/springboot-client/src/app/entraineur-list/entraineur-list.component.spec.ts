import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraineurListComponent } from './entraineur-list.component';

describe('EntraineurListComponent', () => {
  let component: EntraineurListComponent;
  let fixture: ComponentFixture<EntraineurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntraineurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraineurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
