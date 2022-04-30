import axios from "axios";
import { envConfig } from "../constants/env";

const baseURL = envConfig.isAuthMode ? envConfig.remoteApiUrl : envConfig.localApiUrl

export const api = axios.create({
    baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });