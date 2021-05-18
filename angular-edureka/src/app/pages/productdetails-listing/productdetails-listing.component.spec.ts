import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsListingComponent } from './productdetails-listing.component';

describe('ProductdetailsListingComponent', () => {
  let component: ProductdetailsListingComponent;
  let fixture: ComponentFixture<ProductdetailsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
