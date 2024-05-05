import axios from 'axios';

export async function registerUser(lastName,firstName,username, password) {
  const url = 'http://localhost:8080/api/v1/auth/register';
  const body = {
    lastName: lastName,
    firstName: firstName,
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