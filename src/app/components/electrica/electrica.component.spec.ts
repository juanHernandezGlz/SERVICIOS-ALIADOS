import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricaComponent } from './electrica.component';

describe('ElectricaComponent', () => {
  let component: ElectricaComponent;
  let fixture: ComponentFixture<ElectricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
