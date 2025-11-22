import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityExplorer } from './utility-explorer';

describe('UtilityExplorer', () => {
  let component: UtilityExplorer;
  let fixture: ComponentFixture<UtilityExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityExplorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityExplorer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
