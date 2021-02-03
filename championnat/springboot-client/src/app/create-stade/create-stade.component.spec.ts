import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStadeComponent } from './create-stade.component';

describe('CreateStadeComponent', () => {
  let component: CreateStadeComponent;
  let fixture: ComponentFixture<CreateStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
