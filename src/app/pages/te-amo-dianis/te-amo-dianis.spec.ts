import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeAmoDianis } from './te-amo-dianis';

describe('TeAmoDianis', () => {
  let component: TeAmoDianis;
  let fixture: ComponentFixture<TeAmoDianis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeAmoDianis],
    }).compileComponents();

    fixture = TestBed.createComponent(TeAmoDianis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
