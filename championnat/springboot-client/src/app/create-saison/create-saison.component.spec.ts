import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaisonComponent } from './create-saison.component';

describe('CreateSaisonComponent', () => {
  let component: CreateSaisonComponent;
  let fixture: ComponentFixture<CreateSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
