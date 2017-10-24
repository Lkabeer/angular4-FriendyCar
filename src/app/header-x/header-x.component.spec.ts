import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderXComponent } from './header-x.component';

describe('HeaderXComponent', () => {
  let component: HeaderXComponent;
  let fixture: ComponentFixture<HeaderXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
