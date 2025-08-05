import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosNegociosComponent } from './nuevos-negocios.component';

describe('NuevosNegociosComponent', () => {
  let component: NuevosNegociosComponent;
  let fixture: ComponentFixture<NuevosNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevosNegociosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevosNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
