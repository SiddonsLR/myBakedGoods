import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeViewComponent } from './cake-view.component';

describe('CakeViewComponent', () => {
  let component: CakeViewComponent;
  let fixture: ComponentFixture<CakeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
