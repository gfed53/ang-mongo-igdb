import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSearchControlsComponent } from './related-search-controls.component';

describe('RelatedSearchControlsComponent', () => {
  let component: RelatedSearchControlsComponent;
  let fixture: ComponentFixture<RelatedSearchControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedSearchControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedSearchControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
