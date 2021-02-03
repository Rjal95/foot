import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JouerListComponent } from './jouer-list.component';

describe('JouerListComponent', () => {
  let component: JouerListComponent;
  let fixture: ComponentFixture<JouerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JouerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JouerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
