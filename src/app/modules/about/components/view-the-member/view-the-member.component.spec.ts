import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTheMemberComponent } from './view-the-member.component';

describe('ViewTheMemberComponent', () => {
  let component: ViewTheMemberComponent;
  let fixture: ComponentFixture<ViewTheMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTheMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTheMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
