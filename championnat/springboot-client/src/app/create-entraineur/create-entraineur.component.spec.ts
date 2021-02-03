import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntraineurComponent } from './create-entraineur.component';

describe('CreateEntraineurComponent', () => {
  let component: CreateEntraineurComponent;
  let fixture: ComponentFixture<CreateEntraineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEntraineurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
