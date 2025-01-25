import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
  * Fetches word data from an external API based on the provided search term.
  * If the search term is undefined or an error occurs during the fetch, an empty array is returned.
  * 
  * @param searchTerm - The term to search for; optional.
  * @returns A promise that resolves to an array of word data.
  * @throws Will log an error if the fetch fails or if the response is not ok.
  */
export class ApiService {
  base_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  async getWord(searchTerm?: string): Promise<any[]> {
    if (!searchTerm) {
      console.error('searchTerm is undefined.');
      return [];
    }

    try {
      const response = await fetch(this.base_url + searchTerm);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data ?? [];
    } catch (error) {
      console.error('Error fetching word:', error);
      return [];
    }
  }
}
