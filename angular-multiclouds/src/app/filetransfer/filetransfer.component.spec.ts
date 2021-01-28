import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, DragDropModule} from '@angular/cdk/drag-drop';
import { FiletransferComponent } from './filetransfer.component';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

describe('FiletransferComponent', () => {
  let component: FiletransferComponent;
  let fixture: ComponentFixture<FiletransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule, CdkScrollableModule],
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
