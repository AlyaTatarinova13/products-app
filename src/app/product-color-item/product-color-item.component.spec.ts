import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColorItemComponent } from './product-color-item.component';

describe('ProductColorItemComponent', () => {
  let component: ProductColorItemComponent;
  let fixture: ComponentFixture<ProductColorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductColorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductColorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
