import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponenteComponent } from './layout-componente.component';

describe('LayoutComponenteComponent', () => {
  let component: LayoutComponenteComponent;
  let fixture: ComponentFixture<LayoutComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
