import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSearchComponent } from './related-search.component';

describe('RelatedSearchComponent', () => {
  let component: RelatedSearchComponent;
  let fixture: ComponentFixture<RelatedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
