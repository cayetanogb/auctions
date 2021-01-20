import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresAuctionListComponent } from './stores-auction-list.component';

describe('StoresAuctionListComponent', () => {
  let component: StoresAuctionListComponent;
  let fixture: ComponentFixture<StoresAuctionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresAuctionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
