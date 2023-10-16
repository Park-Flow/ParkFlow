import api from './api';

export const signIn = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const signUp = async (name, email, password, confirmPassword) => {
  const response = await api.post('/signup', {
    name,
    email,
    password,
    confirmPassword,
  });
  return response.data;
};
