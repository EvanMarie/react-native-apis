// services/catAPI.ts
import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': "live_bewfJ067MvvKHceujSb8A5JgC1H9LO0wmB0urO13704IfiQK66TssrV5LGMJVtXw",
  },
});

export const getBreeds = async () => {
  try {
    const response = await apiClient.get('/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
};

export const getRandomCatImage = async () => {
  try {
    const response = await apiClient.get('/images/search');
    return response.data[0];
  } catch (error) {
    console.error('Error fetching cat image:', error);
    throw error;
  }
};
