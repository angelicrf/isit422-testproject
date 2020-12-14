import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletransferComponent } from './filetransfer.component';

describe('FiletransferComponent', () => {
  let component: FiletransferComponent;
  let fixture: ComponentFixture<FiletransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiletransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiletransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
