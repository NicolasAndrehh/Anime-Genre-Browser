import fetchGenres from './__mocks__/fetchGenres';

describe('Genres must pass the test', () => {
  test('Fetch available genres must return data', () => {
    expect(fetchGenres()).toBeDefined();
  });
  test('Fetch genres return value length must be 5', () => {
    expect(fetchGenres()).toHaveLength(5);
  });
  test('Fourth fetched genre name should be Award Winning', () => {
    expect(fetchGenres()[3].name).toBe('Award Winning');
  });
});
