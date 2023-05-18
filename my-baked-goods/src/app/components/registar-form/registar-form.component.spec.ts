import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarFormComponent } from './registar-form.component';

describe('RegistarFormComponent', () => {
  let component: RegistarFormComponent;
  let fixture: ComponentFixture<RegistarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
