import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BparallaxComponent } from './bparallax.component';

describe('BparallaxComponent', () => {
  let component: BparallaxComponent;
  let fixture: ComponentFixture<BparallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BparallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BparallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
