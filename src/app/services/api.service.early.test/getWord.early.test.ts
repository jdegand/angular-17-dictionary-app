
// Unit tests for: getWord


import { ApiService } from '../api.service';


describe('ApiService.getWord() getWord method', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  describe('Happy Paths', () => {
    it('should return data when a valid searchTerm is provided', async () => {
      // Arrange
      const searchTerm = 'example';
      const mockResponse = [{ word: 'example', meanings: [] }];
      globalThis.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      ) as jest.Mock;

      // Act
      const result = await apiService.getWord(searchTerm);

      // Assert
      expect(result).toEqual(mockResponse);
      expect(globalThis.fetch).toHaveBeenCalledWith(apiService.base_url + searchTerm);
    });
  });

  describe('Edge Cases', () => {
    it('should return an empty array when searchTerm is undefined', async () => {
      // Arrange
      const searchTerm = undefined;

      // Act
      const result = await apiService.getWord(searchTerm);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return an empty array and log an error when fetch fails', async () => {
      // Arrange
      const searchTerm = 'example';
      globalThis.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
        })
      ) as jest.Mock;

      // Act
      const result = await apiService.getWord(searchTerm);

      // Assert
      expect(result).toEqual([]);
      expect(globalThis.fetch).toHaveBeenCalledWith(apiService.base_url + searchTerm);
    });

    it('should return an empty array when fetch throws an error', async () => {
      // Arrange
      const searchTerm = 'example';
      globalThis.fetch = jest.fn(() => Promise.reject(new Error('Network error'))) as jest.Mock;

      // Act
      const result = await apiService.getWord(searchTerm);

      // Assert
      expect(result).toEqual([]);
      expect(globalThis.fetch).toHaveBeenCalledWith(apiService.base_url + searchTerm);
    });

    it('should return an empty array when the response data is null', async () => {
      // Arrange
      const searchTerm = 'example';
      globalThis.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(null),
        })
      ) as jest.Mock;

      // Act
      const result = await apiService.getWord(searchTerm);

      // Assert
      expect(result).toEqual([]);
      expect(globalThis.fetch).toHaveBeenCalledWith(apiService.base_url + searchTerm);
    });
  });
});

// End of unit tests for: getWord
