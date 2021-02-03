import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneeListComponent } from './journee-list.component';

describe('JourneeListComponent', () => {
  let component: JourneeListComponent;
  let fixture: ComponentFixture<JourneeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
