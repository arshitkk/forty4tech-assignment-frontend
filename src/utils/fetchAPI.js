import axios from "axios";
export const fetchAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
