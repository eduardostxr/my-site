import { ApiData } from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async getData(): Promise<ApiData> {
    try {
      const response = await fetch(`${API_URL}/api/hello`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};