import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishesPageComponent } from './fishes-page.component';

describe('FishesPageComponent', () => {
  let component: FishesPageComponent;
  let fixture: ComponentFixture<FishesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
