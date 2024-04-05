import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiSharedAboutComponent } from './zi-shared-about.component';

describe('ZiSharedAboutComponent', () => {
  let component: ZiSharedAboutComponent;
  let fixture: ComponentFixture<ZiSharedAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiSharedAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiSharedAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
