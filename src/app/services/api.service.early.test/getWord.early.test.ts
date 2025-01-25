
// Unit tests for: getWord


import { ApiService } from '../api.service';


describe('ApiService.getWord() getWord method', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
    globalThis.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  // Happy Path Tests
  describe('Happy Path', () => {
    it('should return data when a valid searchTerm is provided', async () => {
      // Arrange
      const mockResponse = [{ word: 'test', meaning: 'a procedure intended to establish the quality, performance, or reliability of something.' }];
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      // Act
      const result = await apiService.getWord('test');

      // Assert
      expect(result).toEqual(mockResponse);
      expect(globalThis.fetch).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/test');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle undefined searchTerm gracefully', async () => {
      // Arrange
      const mockResponse: any[] = [];
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      // Act
      const result = await apiService.getWord(undefined);

      // Assert
      expect(result).toEqual(mockResponse);
      expect(globalThis.fetch).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/undefined');
    });

    it('should handle network errors gracefully', async () => {
      // Arrange
      (globalThis.fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

      // Act & Assert
      await expect(apiService.getWord('test')).rejects.toThrow('Network Error');
    });

    it('should return an empty array if the response is not JSON', async () => {
      // Arrange
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue(null),
      });

      // Act
      const result = await apiService.getWord('test');

      // Assert
      expect(result).toEqual([]);
    });
  });
});

// End of unit tests for: getWord
