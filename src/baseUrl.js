import axios from "axios";

const instance = axios.create({
  baseURL: 'http://320a-84-54-78-242.ngrok.io/api/'
});

export default instance;