import axios from 'axios';
import { api } from './api';

export const registerApi = async body => {
  console.log(body);
  const { data } = await api.post('/users/register', body);
  console.log(data);
  return data;
};

export const waterConsumeMonthdApi = async body => {
  console.log(body);
  const { data } = await api.post('/waterconsume', body);
  console.log(data);
  return data;
};



export const client = axios.create({
  baseURL: 'https://goit-node-rest-api-im7k.onrender.com/',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

// export async function registerApi(body) {
//   try {
//     console.log('registerApi', body);
//     const { data } = await api.post(
//       'https://goit-node-rest-api-im7k.onrender.com/users/register',
//       body
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
//-------------------------------
export async function loginApi({ email, password }) {
  try {
    const { data } = await client.post('users/login', { email, password });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export async function getContacts() {
//   try {
//     const { data } = await client.get('/api/contacts');
//     console.log(data);
//     return data;
//   } catch (error) {}
// }

// import { api } from './api';

// export const setTokenApi = token => {
//   api.defaults.headers.common['Authorization'] = token;
// };

// export const registerApi = async body => {
//   const { data } = await api.post('/users/register', body);
//   console.log(data);
//   return data;
// };

// registerApi();

// export const loginApi = async (body) => {
//     const { data } = await api.post('/users/login', body)
//     return data
// }
// export const refreshApi = async (token) => {
//     const { data } = await api('/users/current', {
//         headers: {
//         Authorization: `Bearer ${token}`,
//     }})
//     return data
// }

// export const loginOutApi = async () => {
//    await api.post('/users/logout')
// }
