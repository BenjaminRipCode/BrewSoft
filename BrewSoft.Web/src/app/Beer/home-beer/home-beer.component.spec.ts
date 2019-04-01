import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeerComponent } from './home-beer.component';

describe('HomeBeerComponent', () => {
  let component: HomeBeerComponent;
  let fixture: ComponentFixture<HomeBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
