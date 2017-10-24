import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterXComponent } from './footer-x.component';

describe('FooterXComponent', () => {
  let component: FooterXComponent;
  let fixture: ComponentFixture<FooterXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
