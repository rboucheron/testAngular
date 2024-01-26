import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableMultiComponent } from './page-table-multi.component';

describe('PageTableMultiComponent', () => {
  let component: PageTableMultiComponent;
  let fixture: ComponentFixture<PageTableMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTableMultiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTableMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
