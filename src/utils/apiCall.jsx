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

export async function getPlans() {
  const url = `${import.meta.env.VITE_BASE_PLANS_URL}/all`;

  try {
    const response = await axios.get(url);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: 'Error during the request', error: error };
  }
}

export async function registerUser(lastName,firstName,username, password) {
  const url = `${import.meta.env.VITE_BASE_AUTH_URL}/register`;
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
  }}


  export async function sendIds(items) {
    const url = `${import.meta.env.VITE_BASE_TICKETS_URL}/book`;
    const plan_id = items.flatMap(item => Array(item.quantity).fill(item.id));
  
    const body = {
      plan_id: plan_id
    };
  
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token'); // replace 'token' with your actual cookie name

    console.log(token)
  
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    try {
      const response = await axios.post(url, body, config);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error during the request', error);
      return error;
    }
  }

  export async function getOrders() {
    const url = `${import.meta.env.VITE_BASE_TICKETS_URL}/user`;
  
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token'); // replace 'token' with your actual cookie name
  
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      console.error('Error during the request', error);
      return null;
    }
  }

  export async function deleteOrder(id) {
    const url = `${import.meta.env.VITE_BASE_PLANS_URL}/delete/${id}`;
  
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token'); // replace 'token' with your actual cookie name
  
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      console.error('Error during the request', error);
      return null;
    }
  }

  export async function addPlan(planName, numberPerson, price) {
    const url = `${import.meta.env.VITE_BASE_PLANS_URL}/add`;
    const body = {
      plan: planName,
      ticket_quantity: numberPerson,
      price: price,
      image_url: "/logo.webp"
    };
  
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token'); // replace 'token' with your actual cookie name
  
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    try {
      const response = await axios.post(url, body, config);
      return response.data;
    } catch (error) {
      console.error('Error during the request', error);
      return null;
    }
  }