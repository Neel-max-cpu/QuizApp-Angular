import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponentComponent } from './categories-component.component';

describe('CategoriesComponentComponent', () => {
  let component: CategoriesComponentComponent;
  let fixture: ComponentFixture<CategoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
