import axios from 'axios';

const API = '3d84961f949a3e74c161a443f40cca6f';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API}`,
  );
  return response.data.results;
};

const fetchById = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API}`);
  return response.data;
};

const fetchCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API}`,
  );
  return response.data.cast;
};

const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API}`,
  );
  return response.data.results;
};

const searchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API}&query=${query}`,
  );
  return response.data.results;
};

export default {
  fetchMovies,
  fetchById,
  fetchCast,
  fetchReviews,
  searchMovies,
};