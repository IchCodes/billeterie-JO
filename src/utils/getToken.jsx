import axios from 'axios';
import Cookies from 'universal-cookie';

export async function getToken(username, password) {
  const url = `${import.meta.env.VITE_BASE_AUTH_URL}/login`;
  const body = {
    username: username,
    password: password
  };

  try {
    const response = await axios.post(url, body);
    console.log(response)

    const cookies = new Cookies(null, { path: '/' });
    cookies.set('token', response.data.token, { path: '/' });

    return { success: true, message: response.data.message };

  } catch (error) {
    return { success: false, message: 'Error during the request', error: error };
  }
}