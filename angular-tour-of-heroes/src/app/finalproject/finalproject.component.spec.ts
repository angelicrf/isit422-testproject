import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalprojectComponent } from './finalproject.component';

describe('FinalprojectComponent', () => {
  let component: FinalprojectComponent;
  let fixture: ComponentFixture<FinalprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
