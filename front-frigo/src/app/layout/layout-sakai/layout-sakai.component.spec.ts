import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSakaiComponent } from './layout-sakai.component';

describe('LayoutSakaiComponent', () => {
  let component: LayoutSakaiComponent;
  let fixture: ComponentFixture<LayoutSakaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSakaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSakaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
