// api.ts

import axios from 'axios';

const API_BASE_URL = 'https://datausa.io/api/data';

interface ApiResponse {
  data: DataItem[];
  source: any[];
}

interface DataItem {
  ID: string;
  Year: string;
  Nation: string;
  Population: number;
}

const getData = async (params: Record<string, string>): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(API_BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Data USA API', error);
    throw error;
  }
};

export { getData, DataItem };
