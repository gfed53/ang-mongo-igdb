import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDealLinkComponent } from './game-deal-link.component';

describe('GameDealLinkComponent', () => {
  let component: GameDealLinkComponent;
  let fixture: ComponentFixture<GameDealLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDealLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDealLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
