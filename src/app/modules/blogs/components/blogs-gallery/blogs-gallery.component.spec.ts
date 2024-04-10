import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsGalleryComponent } from './blogs-gallery.component';

describe('BlogsGalleryComponent', () => {
  let component: BlogsGalleryComponent;
  let fixture: ComponentFixture<BlogsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
