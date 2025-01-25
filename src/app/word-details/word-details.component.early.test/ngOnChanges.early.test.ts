
// Unit tests for: ngOnChanges


import { ApiService } from '../../services/api.service';
import { WordDetailsComponent } from '../word-details.component';


jest.mock("../../services/api.service");

describe('WordDetailsComponent.ngOnChanges() ngOnChanges method', () => {
  let component: WordDetailsComponent;
  let mockApiService: jest.Mocked<ApiService>;

  beforeEach(() => {
    mockApiService = new ApiService() as jest.Mocked<ApiService>;
    component = new WordDetailsComponent();
    component.apiService = mockApiService;
  });

  describe('Happy paths', () => {
    it('should set word$ with the response from ApiService when searched word is valid', async () => {
      // Arrange: Set up the mock response and input
      const mockResponse = [{ word: 'test', meaning: 'a procedure intended to establish the quality, performance, or reliability of something' }];
      mockApiService.getWord.mockResolvedValue(mockResponse);
      component.searched = 'test';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that word$ is set correctly
      expect(component.word$).toEqual(mockResponse);
    });
  });

  describe('Edge cases', () => {
    it('should handle empty searched word gracefully', async () => {
      // Arrange: Set up the input
      component.searched = '';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that getWord is not called
      expect(mockApiService.getWord).not.toHaveBeenCalled();
    });

    it('should handle null searched word gracefully', async () => {
      // Arrange: Set up the input
      component.searched = null;

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that getWord is not called
      expect(mockApiService.getWord).not.toHaveBeenCalled();
    });

    it('should handle undefined searched word gracefully', async () => {
      // Arrange: Set up the input
      component.searched = undefined;

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that getWord is not called
      expect(mockApiService.getWord).not.toHaveBeenCalled();
    });

    it('should handle API service rejection gracefully', async () => {
      // Arrange: Set up the mock rejection
      const mockError = new Error('API error');
      mockApiService.getWord.mockRejectedValue(mockError);
      component.searched = 'test';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that word$ is not set and error is handled
      expect(component.word$).toBeUndefined();
      expect(component.errorResponse).toBe(mockError);
    });
  });
});

// End of unit tests for: ngOnChanges
