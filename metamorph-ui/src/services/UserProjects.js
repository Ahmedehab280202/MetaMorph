import axios from 'axios';

const BASE_URL = 'http://localhost:8080/metadata/projects';

export const getProjectsByUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new Error('Failed to fetch projects');
    }
  };