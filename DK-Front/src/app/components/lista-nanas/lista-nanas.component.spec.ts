import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNanasComponent } from './lista-nanas.component';

describe('ListaNanasComponent', () => {
  let component: ListaNanasComponent;
  let fixture: ComponentFixture<ListaNanasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNanasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
