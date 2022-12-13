import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchWithBrandComponent } from './research-with-brand.component';

describe('ResearchWithBrandComponent', () => {
  let component: ResearchWithBrandComponent;
  let fixture: ComponentFixture<ResearchWithBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchWithBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchWithBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
