import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedResultsComponent } from './related-results.component';

describe('RelatedResultsComponent', () => {
  let component: RelatedResultsComponent;
  let fixture: ComponentFixture<RelatedResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
