import axios from 'axios';

export async function getToken(username, password) {
  const url = 'http://localhost:8080/api/v1/auth/login';
  const body = {
    username: username,
    password: password
  };

  try {
    const response = await axios.post(url, body);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error during the request', error);
    throw error;
  }
}