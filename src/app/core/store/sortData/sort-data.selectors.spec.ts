import * as fromSortData from './sort-data.reducer';
import { selectSortDataState } from './sort-data.selectors';

describe('SortData Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSortDataState({
      [fromSortData.sortDataFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
