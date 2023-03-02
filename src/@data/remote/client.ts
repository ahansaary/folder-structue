import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

// ALL DEFUALT CONFIGURATION HERE

export const Api = axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  }
});

export default Api
