import fetchAnimes from './__mocks__/fetchAnimes';

describe('Animes must pass the test', () => {
  test('Fetch available animes must return data', () => {
    expect(fetchAnimes()).toBeDefined();
  });
  test('Fetch animes return value length must be 3', () => {
    expect(fetchAnimes()).toHaveLength(3);
  });
  test('Fourth fetched anime title should be Cowboy Bebop', () => {
    expect(fetchAnimes()[0].title).toBe('Cowboy Bebop');
  });
});
