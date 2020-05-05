import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './product-counter.actions';

export const initialState = 0;

const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
);

export function productCounterReducer(state, action) {
  return counterReducer(state, action);
}
