import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudmanagementComponent } from './cloudmanagement.component';

describe('CloudmanagementComponent', () => {
  let component: CloudmanagementComponent;
  let fixture: ComponentFixture<CloudmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
