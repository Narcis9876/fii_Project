import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePokeComponent } from './battle-poke.component';

describe('BattlePokeComponent', () => {
  let component: BattlePokeComponent;
  let fixture: ComponentFixture<BattlePokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlePokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
