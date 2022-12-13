import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBrandsComponent } from './liste-brands.component';

describe('ListeBrandsComponent', () => {
  let component: ListeBrandsComponent;
  let fixture: ComponentFixture<ListeBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
