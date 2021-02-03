import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoueurComponent } from './create-joueur.component';

describe('CreateJoueurComponent', () => {
  let component: CreateJoueurComponent;
  let fixture: ComponentFixture<CreateJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
