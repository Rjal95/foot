import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadeListComponent } from './stade-list.component';

describe('StadeListComponent', () => {
  let component: StadeListComponent;
  let fixture: ComponentFixture<StadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
