
// Unit tests for: ngOnChanges


import { ApiService } from '../../services/api.service';
import { WordDetailsComponent } from '../word-details.component';


jest.mock("../../services/api.service");

describe('WordDetailsComponent.ngOnChanges() ngOnChanges method', () => {
  let component: WordDetailsComponent;
  let apiServiceMock: jest.Mocked<ApiService>;

  beforeEach(() => {
    apiServiceMock = new ApiService() as jest.Mocked<ApiService>;
    component = new WordDetailsComponent(apiServiceMock);
  });

  describe('Happy paths', () => {
    it('should fetch word details when searched word is provided', async () => {
      // Arrange: Set up the mock to return a resolved promise with mock data
      const mockWordData = [{ word: 'test' }];
      apiServiceMock.getWord.mockResolvedValue(mockWordData);
      component.word = 'test';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that the word$ property is set with the mock data
      expect(apiServiceMock.getWord).toHaveBeenCalledWith('test');
      expect(component.word$).toEqual(mockWordData);
    });
  });

  describe('Edge cases', () => {
    it('should not fetch word details when searched word is undefined', async () => {
      // Arrange: Set the searched word to undefined
      component.word = undefined;

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that getWord is not called and word$ remains undefined
      expect(apiServiceMock.getWord).not.toHaveBeenCalled();
      expect(component.word$).toBeUndefined();
    });

    it('should handle API errors gracefully', async () => {
      // Arrange: Set up the mock to return a rejected promise
      apiServiceMock.getWord.mockRejectedValue(new Error('API error'));
      component.word = 'errorTest';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that word$ is set to undefined or an empty array
      expect(apiServiceMock.getWord).toHaveBeenCalledWith('errorTest');
      expect(component.word$).toBeUndefined();
    });

    it('should handle empty response from API', async () => {
      // Arrange: Set up the mock to return an empty array
      apiServiceMock.getWord.mockResolvedValue([]);
      component.word = 'emptyTest';

      // Act: Call ngOnChanges
      await component.ngOnChanges();

      // Assert: Verify that word$ is set to an empty array
      expect(apiServiceMock.getWord).toHaveBeenCalledWith('emptyTest');
      expect(component.word$).toEqual([]);
    });
  });
});

// End of unit tests for: ngOnChanges
