import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoneyComponent } from './add-poney.component';

describe('AddPoneyComponent', () => {
  let component: AddPoneyComponent;
  let fixture: ComponentFixture<AddPoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
