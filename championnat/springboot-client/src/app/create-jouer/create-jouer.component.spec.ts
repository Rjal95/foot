import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJouerComponent } from './create-jouer.component';

describe('CreateJouerComponent', () => {
  let component: CreateJouerComponent;
  let fixture: ComponentFixture<CreateJouerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJouerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
