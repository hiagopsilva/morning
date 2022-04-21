import axios from 'axios';
import { interceptRequest } from './interceptors';

const timeout = 30000; // 30 seconds

const request = axios.create({
  timeout, // 20 seconds timeout
});

axios.defaults.timeout = timeout;

request.interceptors.request.use(config => interceptRequest(config));

export default request;
