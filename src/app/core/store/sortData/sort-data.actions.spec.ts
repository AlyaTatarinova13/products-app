import * as fromSortData from './sort-data.actions';

describe('loadSortDatas', () => {
  it('should return an action', () => {
    expect(fromSortData.updateSortDatas().type).toBe('[SortData] Load SortDatas');
  });
});
