import axios from "axios";
import { apiKey } from "../config/apiNinjasAPIKey.config.js";

export const fetchExercises = async (muscle) => {
  const urlToFetch = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
  try {
    const response = await axios.get(urlToFetch, {
      headers: { "X-Api-Key": apiKey },
    });
    return response.data; 
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};