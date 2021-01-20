import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresInAuctionComponent } from './stores-in-auction.component';

describe('StoresInAuctionComponent', () => {
  let component: StoresInAuctionComponent;
  let fixture: ComponentFixture<StoresInAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresInAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresInAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
