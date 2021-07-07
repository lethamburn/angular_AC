import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsPageComponent } from './bugs-page.component';

describe('BugsPageComponent', () => {
  let component: BugsPageComponent;
  let fixture: ComponentFixture<BugsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
