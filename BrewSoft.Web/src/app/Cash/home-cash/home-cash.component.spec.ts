import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCashComponent } from './home-cash.component';

describe('HomeCashComponent', () => {
  let component: HomeCashComponent;
  let fixture: ComponentFixture<HomeCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
