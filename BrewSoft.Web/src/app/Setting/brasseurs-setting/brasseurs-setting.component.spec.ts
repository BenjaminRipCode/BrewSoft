import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasseursSettingComponent } from './brasseurs-setting.component';

describe('BrasseursSettingComponent', () => {
  let component: BrasseursSettingComponent;
  let fixture: ComponentFixture<BrasseursSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasseursSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasseursSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
