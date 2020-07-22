import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SortDataEffects } from './sort-data.effects';

describe('SortDataEffects', () => {
  let actions$: Observable<any>;
  let effects: SortDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SortDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SortDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
