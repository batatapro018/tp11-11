import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incio } from './incio';

describe('Incio', () => {
  let component: Incio;
  let fixture: ComponentFixture<Incio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incio],
    }).compileComponents();

    fixture = TestBed.createComponent(Incio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
