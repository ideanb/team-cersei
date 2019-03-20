import axios from 'axios';
const API_URL = 'http://localhost:3000/skills';

export function fetch() {
  return axios.request({
    url: `${API_URL}`,
    method: 'GET'
  });
}

export function add(data) {
  return axios.request({
    url: `${API_URL}`,
    method: 'POST',
    data
  });
}

export function remove(skillId) {
  return axios.request({
    url: `${API_URL}/${skillId}`,
    method: 'DELETE'
  });
}
