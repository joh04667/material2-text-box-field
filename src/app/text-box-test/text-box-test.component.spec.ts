import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxTestComponent } from './text-box-test.component';

describe('TextBoxTestComponent', () => {
  let component: TextBoxTestComponent;
  let fixture: ComponentFixture<TextBoxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
