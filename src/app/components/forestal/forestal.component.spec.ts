import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestalComponent } from './forestal.component';

describe('ForestalComponent', () => {
  let component: ForestalComponent;
  let fixture: ComponentFixture<ForestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForestalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
