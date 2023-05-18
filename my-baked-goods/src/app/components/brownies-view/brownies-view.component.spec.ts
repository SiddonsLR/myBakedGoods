import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesViewComponent } from './brownies-view.component';

describe('BrowniesViewComponent', () => {
  let component: BrowniesViewComponent;
  let fixture: ComponentFixture<BrowniesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowniesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowniesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
