import axios from "axios";
import { envConfig } from "../constants/env";

const baseURL = envConfig.apiUrl

export const api = axios.create({
    baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });