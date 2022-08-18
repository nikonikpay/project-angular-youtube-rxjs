import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHttpRequestComponent } from './more-http-request.component';

describe('MoreHttpRequestComponent', () => {
  let component: MoreHttpRequestComponent;
  let fixture: ComponentFixture<MoreHttpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreHttpRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
